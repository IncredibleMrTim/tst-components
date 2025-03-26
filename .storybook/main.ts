import type { StorybookConfig } from "@storybook/react-vite";
import postcss from "postcss";

const config: StorybookConfig = {
  stories: ["../src/**/*.md*", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: { postcssLoaderOptions: { implementation: postcss } },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
};
export default config;
npm pu