import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  // Base path for GitHub Pages deployment
  ...(process.env.NODE_ENV === 'production' && { base: '/component-hub/' }),
};
export default config;