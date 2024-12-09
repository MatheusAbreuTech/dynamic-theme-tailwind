import { mergeConfig } from './src/tailwind/mergeConfig';

const dolthubColors = {
  /* any other colors specific to this app */
};

const config = mergeConfig({
  theme: {
    extend: {
      gradientColorStops: dolthubColors,
      colors: dolthubColors,
    },
  },
  content: [
    // Add content
  ],
});

export default config;
