import { IThemeColors, IThemeVariables } from '../types';

const staticColors = {
  // define any static colors that will have the same value for all apps
  test: '#000000',
};

const configurableColors: IThemeColors = {
  'accent-1': withOpacity('--color-accent-1'),
  'primary-100': withOpacity('--primary-100'),
};

function withOpacity(variableName: keyof IThemeVariables): string {
  return `rgba(var(${variableName}), <alpha-value>)`;
}

const colors = { ...staticColors, ...configurableColors };
export default colors;
