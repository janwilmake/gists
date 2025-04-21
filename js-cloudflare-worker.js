/**
 * Get type 'safety' in js projects in VSCode (and other IDEs with good typescript support).
 * Why js > ts? Because it runs in browsers too and with things like `eval` (without bundling/compilation).
 * Ensure @cloudflare/workers-types is accessible. `npm i --save-dev @cloudflare/workers-types`
 */
//@ts-check
/// <reference types="@cloudflare/workers-types" />
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
