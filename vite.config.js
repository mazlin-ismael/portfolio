import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/imazlin-portfolio/",
  server: {
    allowedHosts: ["401e-80-12-92-49.ngrok-free.app"]
  }
  
});
