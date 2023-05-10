import { serveDir } from "https://deno.land/std@0.186.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

Deno.chdir("./dist");
serve((req) => {
  return serveDir(req);
});
