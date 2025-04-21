/**
 * Ensure @cloudflare/workers-types is accessible. `npm i --save-dev @cloudflare/workers-types`
 *
 * Get type 'safety' in js projects
 */
/// <reference types="@cloudflare/workers-types" />
//@ts-check
export default {
  /**
   * Cloudflare Worker handler function
   * @param {Request} request - The incoming request
   * @param {{ DORM: DurableObjectNamespace }} env - Environment variables and bindings
   * @param {ExecutionContext} ctx - Execution context
   * @returns {Promise<Response>} - The response to the request
   */
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    return new Response("Hello, world");
  },
};
