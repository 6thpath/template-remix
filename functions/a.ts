export const onRequestGet: PagesFunction<any, string, Record<string, unknown>> = () => {
  return new Response(JSON.stringify({ ok: false, message: 'An unexpected error occurred' }), {
    status: 500,
  })
}
