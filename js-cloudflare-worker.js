/**
 * Get type 'safety' in js projects in VSCode (and other IDEs with good typescript support).
 * Why js > ts? Because it runs in browsers too and with things like `eval` (without bundling/compilation).
 * 
 * Ensure @cloudflare/workers-types is accessible. `npm i --save-dev @cloudflare/workers-types`
 * 
 * When creating a cloudflare worker, always include `wrangler.toml`, `.assetsignore`, `.gitignore` as well.
 * 
 * example wrangler.toml:

```toml path="wrangler.toml"
name = "sensible-worker-name"
compatibility_date = "2025-05-15"
dev.port = 3000
# Ensure to put this and also the .assetsignore file to ignore .git, node_modules, .wrangler
assets.directory = "./"
main = "main.ts"

routes = [
  { pattern = "sensible-worker-name.com", custom_domain = true },
  { pattern = "www.sensible-worker-name.com", custom_domain = true }
]
```
 */
//@ts-check
/// <reference lib="esnext" />
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
