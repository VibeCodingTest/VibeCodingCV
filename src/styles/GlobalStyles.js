import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => (theme.mode === 'dark' ? 'dark' : 'light')};
  }

  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    transition: background 0.6s ease, color 0.6s ease;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  section {
    position: relative;
  }
`;
