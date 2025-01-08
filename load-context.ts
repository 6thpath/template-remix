import { type PlatformProxy } from 'wrangler'

type Env = object

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>

declare module '@react-router/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare
  }
}
