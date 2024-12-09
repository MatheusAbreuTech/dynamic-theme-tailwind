import { IThemeRGB, IThemeVariables } from '../types';

export default function applyTheme(themeRGB: IThemeRGB) {
  const themeObject: IThemeVariables = mapTheme(themeRGB);
  const root = document.documentElement;

  Object.keys(themeObject).forEach((v) => {
    const propertyVal = themeObject[v as keyof IThemeVariables];
    const validation = validateRGB(propertyVal);
    if (!validation) {
      throw new Error(`Invalid RGB value for ${v}: ${propertyVal}`);
    }

    root.style.setProperty(v, propertyVal);
  });
}

function mapTheme(rgb: IThemeRGB): IThemeVariables {
  return {
    '--color-accent-1': rgb['rgb-accent-1'] ?? '',
    '--primary-100': rgb.primary['100'] ?? '',
  };
}

function validateRGB(rgb: string): boolean {
  if (!rgb) return true;
  const rgbRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
  return rgbRegex.test(rgb);
}
