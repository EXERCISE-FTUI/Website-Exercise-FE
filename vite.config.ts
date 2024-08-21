import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 3104,
  strictPort: true,
 },
 server: {
  port: 3104,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:4173",
 },
});