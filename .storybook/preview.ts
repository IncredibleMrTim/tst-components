import type { Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    features: {
      previewMDX: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
