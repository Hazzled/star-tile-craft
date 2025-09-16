import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");

// ✅ Check SSR build exists
const ssrPath = toAbsolute("dist/server/entry-server.js");
if (!fs.existsSync(ssrPath)) {
  console.error("❌ ERROR: SSR build missing!");
  console.error("Expected file:", ssrPath);
  console.error(
    "Did you run `npm run build:ssr` successfully? Or is vite.config.ssr.js misconfigured?"
  );
  process.exit(1);
}

// ✅ Try importing render function
let render;
try {
  ({ render } = await import("./dist/server/entry-server.js"));
} catch (err) {
  console.error("❌ ERROR: Could not import SSR build from:", ssrPath);
  console.error(err);
  process.exit(1);
}

// Define routes to prerender (adjust as needed)
const routesToPrerender = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/blog",
];

(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = await render(url);

      const html = template.replace(
        `<!--app-html-->`,
        appHtml
      );

      const filePath = `dist${url === "/" ? "/index" : url}.html`;
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);

      console.log(`✅ Pre-rendered: ${url} → ${filePath}`);
    } catch (err) {
      console.error(`❌ Failed to prerender ${url}:`, err);
    }
  }
})();
