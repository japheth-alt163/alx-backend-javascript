/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {Object} endpoint - The endpoint to make a request to.
 * @param {string} endpoint.protocol - The protocol of the endpoint.
 * @param {string} endpoint.name - The name of the endpoint.
 * @throws {Error} Throws an error if the maximum number of calls for an endpoint is exceeded.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const calls = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, calls);
  if (calls >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
