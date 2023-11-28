/**
 * Simple helper function for extracting search path from request object
 *
 * @param {Object} request Request object for extracting
 * @returns {string} Search path
 */

export default function getSearchPath(request) {
  const url = new URL(request.url);
  return url.pathname + url.search;
}
