import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "wingman-512.png"],
      manifest: {
        name: "Wingman",
        short_name: "Wingman",
        description: "Your pocket flirting co-pilot.",
        theme_color: "#0f172a",
        background_color: "#020617",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/wingman-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/wingman-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
