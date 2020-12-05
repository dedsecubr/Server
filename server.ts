import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 5000 });

console.log('Listening to port 5000 on http://localhost:5000');

for await (const req of s) {

  const html_file = await Deno.readFile('./index.html');
  const decoder = new TextDecoder()
  req.respond({ body: decoder.decode(html_file) });
}
