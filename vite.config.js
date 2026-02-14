import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

function htmlPartials() {
  const partialsDir = resolve(__dirname, "partials");

  return {
    name: "html-partials",
    transformIndexHtml(html, ctx) {
      const isHome =
        ctx.filename.endsWith("index.html") &&
        !ctx.filename.includes("projects");

      const vars = {
        scrolled: isHome ? "" : " scrolled",
        linkPrefix: isHome ? "" : "/",
      };

      // Replace {{> partialName}} with partial file contents
      html = html.replace(/\{\{>\s*(\w+)\s*\}\}/g, (_match, name) => {
        return readFileSync(resolve(partialsDir, `${name}.html`), "utf-8");
      });

      // Replace {{variable}} with context values
      html = html.replace(/\{\{(\w+)\}\}/g, (_match, key) => {
        return vars[key] !== undefined ? vars[key] : `{{${key}}}`;
      });

      return html;
    },
  };
}

export default defineConfig({
  root: ".",
  plugins: [htmlPartials()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        notFound: resolve(__dirname, "404.html"),
        projectsIndex: resolve(__dirname, "projects/index.html"),
        ecommerce: resolve(__dirname, "projects/ecommerce-store.html"),
        portfolio: resolve(__dirname, "projects/portfolio-site.html"),
        taskManager: resolve(__dirname, "projects/task-manager.html"),
        weather: resolve(__dirname, "projects/weather-app.html"),
      },
    },
  },
});
