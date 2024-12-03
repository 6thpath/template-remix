import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [{ title: 'Homepage' }, { name: 'description', content: 'This is the home page' }]
}

export default function Page() {
  return <div className="flex h-screen items-center justify-center">Home Page</div>
}
