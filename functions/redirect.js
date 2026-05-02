export function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");

  const routes = {
    "2010": "https://multimovies.fyi",
    "1111": "https://hackerai.co/",
    "1212": "https://notegpt.io",
    "1819": "https://tbcpl.lol/"
  };

  if (routes[code]) {
    return Response.redirect(routes[code], 302);
  }

  return new Response("Wrong code");
}
