import { route, type RouteConfig } from '@react-router/dev/routes'

export default [route('/', './routes/root.tsx'), route('/home', './routes/home.tsx')] satisfies RouteConfig
