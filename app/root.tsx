import type { LinksFunction } from '@remix-run/cloudflare'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import './styles/app.css'
import { ErrorBoundary } from './components/error-boundary'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300..7000&display=swap',
  },
]

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex">
        <ErrorBoundary>{children}</ErrorBoundary>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const Application: React.FC = () => {
  return <Outlet />
}

export default Application
