import { defineConfig } from "@pandacss/dev";
import { fidelyPreset } from "@fidely-ui/panda-preset";
import mauve from "@fidely-ui/panda-preset/colors/mauve";
import plum from "@fidely-ui/panda-preset/colors/plum";

export default defineConfig({
  presets: [fidelyPreset({
    accentColor: plum,
    grayColor: mauve,
    rounded: "md"
  })],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@fidely-ui/react/dist/panda.buildinfo.json"
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  staticCss: {
    recipes: "*",
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  plugins: [
    {
      name: "panda-headless-colors",
      hooks: {
        "preset:resolved": ({ utils, preset, name }) => {
          if (name === "@pandacss/preset-panda") {
            return utils.omit(preset, ["theme.tokens.colors", "theme.semanticTokens.colors"])
          }
          return preset
        }
      },
    },
  ],
});