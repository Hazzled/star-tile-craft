// prerender.js
import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// List all routes you want prerendered
const routesToPrerender = ["/", "/about", "/services", "/portfolio", "/contact"];

for (const route of routesToPrerender) {
  const { html, head } = await render(route);

  const page = template
    .replace(`<!--app-html-->`, html)
    .replace(
      `<title>Expert Tile Installation in Portland | Star Tile LLC</title>`,
      head
    );

  const filePath = `dist${route === "/" ? "" : route}/index.html`;
  const dir = path.dirname(toAbsolute(filePath));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(toAbsolute(filePath), page);

  console.log(`✅ Prerendered: ${filePath}`);
}
