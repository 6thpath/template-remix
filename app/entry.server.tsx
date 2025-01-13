import { isbot } from 'isbot'
import { renderToReadableStream } from 'react-dom/server'
import type { EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'

const streamTimeout = 10_000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  try {
    const controller = new AbortController()
    setTimeout(() => {
      controller.abort()
    }, streamTimeout)

    const userAgent = request.headers.get('user-agent')
    const stream = await renderToReadableStream(<ServerRouter context={routerContext} url={request.url} />, {
      signal: controller.signal,
      onError(error) {
        responseStatusCode = 500
        logger(error)
      },
    })
    const isCrawler = userAgent && isbot(userAgent)
    if (routerContext.isSpaMode || isCrawler) {
      await stream.allReady
    } else {
      responseHeaders.set('Transfer-Encoding', 'chunked')
    }

    responseHeaders.set('Content-Type', 'text/html')

    return new Response(stream, { status: responseStatusCode, headers: responseHeaders })
  } catch (error) {
    logger(error)

    responseHeaders.set('Content-Type', 'text/html')

    return new Response('<h1>Something went wrong</h1>', { status: 500, headers: responseHeaders })
  }
}

function logger(error: unknown) {
  console.error('[Caught Error]:', error)
}
