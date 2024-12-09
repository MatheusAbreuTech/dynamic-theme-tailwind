import ThemeProvider from './tailwind/context';
import { tailwindColorTheme } from './tailwind/themes/televet';

export default function App() {
  return (
    <ThemeProvider themeRGB={tailwindColorTheme}>
      <h1 className='text-3xl font-bold text-primary-100'>Hello world!</h1>
    </ThemeProvider>
  );
}
