export default function getSearchPath(request) {
  const url = new URL(request.url);
  return url.pathname + url.search;
}
