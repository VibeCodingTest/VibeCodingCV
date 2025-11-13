import { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from './styles/GlobalStyles.js';
import { darkTheme, lightTheme } from './styles/theme.js';
import { usePrefersColorScheme } from './hooks/usePrefersColorScheme.js';
import Home from './pages/Home.jsx';

const App = () => {
  const { i18n, t } = useTranslation();
  const scheme = usePrefersColorScheme();

  const theme = useMemo(
    () => ({ ...(scheme === 'dark' ? darkTheme : lightTheme), mode: scheme }),
    [scheme]
  );

  useEffect(() => {
    const { title, description } = t('meta', { returnObjects: true });
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }

    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
