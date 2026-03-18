import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import pandacss from "@pandacss/dev/postcss"
import path from "node:path";

export default defineConfig({
  css: {
    postcss: {
      plugins: [pandacss]
    }
  },
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app'),
      'styled-system': path.resolve(__dirname, 'styled-system'),
    },
  },
  
  ssr: {
    noExternal: ["@fidely-ui/react"],
  },
});