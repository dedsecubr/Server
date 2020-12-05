import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8000 });

console.log('HTTP server listening on http://localhost:8000');

for await (const req of s) {

  const html_file = await Deno.readFile('./index.html');
  const decoder = new TextDecoder()
  req.respond({ body: decoder.decode(html_file) });
}
