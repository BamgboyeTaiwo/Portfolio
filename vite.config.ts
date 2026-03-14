import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Inline assets under 8KB directly into JS/CSS to avoid extra network requests
    assetsInlineLimit: 8192,

    // esbuild minifier — fastest, excellent output
    minify: "esbuild",

    // Target modern browsers — eliminates legacy polyfills
    target: "es2020",

    // Show accurate gzip sizes in build output
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // Split the bundle so each route only downloads what it needs.
        // Stable chunk names ensure long-term CDN caching.
        manualChunks: {
          // React runtime — changes rarely, cached independently
          "vendor-react": ["react", "react-dom", "react-router-dom"],

          // Framer Motion is ~150KB — separate chunk, cached independently
          "vendor-motion": ["framer-motion"],

          // Radix UI primitives actually used in this portfolio
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-label",
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-tooltip",
          ],

          // Small utilities bundled together
          "vendor-utils": [
            "clsx",
            "tailwind-merge",
            "class-variance-authority",
            "lucide-react",
          ],

          // React Query — data fetching layer, changes independently of app code
          "vendor-query": ["@tanstack/react-query"],

          // Toast/notification stack pulled from App.tsx critical path
          "vendor-toaster": ["sonner", "next-themes"],
        },

        // Content-hashed filenames for long-term browser caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
