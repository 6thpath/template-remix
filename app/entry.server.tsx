import { isbot } from 'isbot'
import { renderToReadableStream } from 'react-dom/server'
import type { EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'

export const streamTimeout = 5_000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  let shellRendered = false
  const userAgent = request.headers.get('user-agent')

  const stream = await renderToReadableStream(<ServerRouter context={routerContext} url={request.url} />, {
    signal: request.signal,
    onError(error) {
      responseStatusCode = 500

      if (shellRendered) {
        console.error(error)
      }
    },
  })

  if ((userAgent && isbot(userAgent)) || routerContext.isSpaMode) {
    await stream.allReady
    shellRendered = true
  } else {
    responseHeaders.set('Transfer-Encoding', 'chunked')
  }

  responseHeaders.set('Content-Type', 'text/html; charset=utf-8')

  return new Response(stream, { status: responseStatusCode, headers: responseHeaders })
}
