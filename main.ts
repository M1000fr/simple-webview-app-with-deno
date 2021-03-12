import { Webview } from "https://deno.land/x/webview/mod.ts";

const webview = new Webview({
    url: `https://google.fr`,
    title: `Google`,
    frameless: true
});

await webview.run();