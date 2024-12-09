// Defines the color channels. Passed to the context from each app.
// i.e. {"rgb-accent-1": "252 66 201"}
export interface IThemeRGB {
  'rgb-accent-1'?: string;
  primary: {
    '100': string;
  };
}

// Name of the CSS variables used in tailwind.config.ts
export interface IThemeVariables {
  '--color-accent-1': string;
  '--primary-100': string;
}

// Name of the defined colors in the Tailwind theme
export interface IThemeColors {
  'accent-1'?: string;
  'primary-100': string;
}
