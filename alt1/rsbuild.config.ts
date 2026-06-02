import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title: "Support App",
        template: "./public/index.html"
    },
    server: {
        port: 6173,
        open: true
    }
});


