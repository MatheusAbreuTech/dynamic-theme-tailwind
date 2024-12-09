import merge from 'deepmerge';
import { Config } from 'tailwindcss';
import colors from './base/colors';

const reactComponentsTailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      transitionProperty: { width: 'width' },
      gradientColorStops: colors,
      colors,
    },
  },
};

/**
 * Merge @dolthub/react-components and Tailwind CSS configurations
 */
export function mergeConfig(tailwindConfig: Config): Config {
  const merged = merge(reactComponentsTailwindConfig, { ...tailwindConfig });
  return merged;
}
