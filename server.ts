import { serve } from "https://raw.githubusercontent.com/dedsecubr/deno/master/std/http/server.ts";

const s = serve({ hostname: "0.0.0.0", port: 8000 });

console.log('%cHTTP '+'%cserver listening on http://localhost:8000','color:green;','color:white;');

for await (const req of s) {

  const html_file = await Deno.readFile('./public/index.html');
  const decoder = new TextDecoder()
  req.respond({ body: decoder.decode(html_file) });
}
