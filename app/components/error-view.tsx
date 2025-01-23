import { IconConfused } from '@components/icons'

export const ErrorView: React.FC = () => {
  return (
    <section className="prose prose-slate prose-invert flex flex-col items-center">
      <h1>Oops!</h1>
      <IconConfused size={60} />
      <h3>404 - PAGE NOT FOUND</h3>
      <p className="text-center">
        The page you are looking for might have been removed,
        <br /> had its name changed or is temporarily unavailable
      </p>

      {/* <Link to="/">Go to Homepage</Link> */}
    </section>
  )
}
