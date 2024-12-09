import React, { createContext, useEffect, useMemo } from 'react';
import { IThemeRGB } from '../types';
import applyTheme from './applyTheme';

type Props = {
  children: React.ReactNode;
  themeRGB: IThemeRGB;
};

type ThemeContextType = {
  themeRGB: IThemeRGB;
};

const ThemeContext = createContext<ThemeContextType>({
  themeRGB: {} as IThemeRGB,
});

export default function ThemeProvider(props: Props) {
  // Note: if you want switch themes on demand, you should
  // add `props.themeRGB` to the dependency array
  useEffect(() => {
    console.log('props.themeRGB', props.themeRGB);
    applyTheme(props.themeRGB);
  }, []);

  const value = useMemo(() => {
    return { themeRGB: props.themeRGB };
  }, [props.themeRGB]);

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}
