import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [{ title: 'Homepage' }, { name: 'description', content: 'This is the home page' }]
}

export default function Page() {
  return <div className="flex h-screen items-center justify-center">Home Page</div>
}
