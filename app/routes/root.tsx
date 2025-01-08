import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [{ title: 'Root Page' }, { name: 'description', content: 'This is the root page' }]
}

export default function Page() {
  return <div className="flex h-screen items-center justify-center">Root Page</div>
}
