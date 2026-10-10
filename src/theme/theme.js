import { createTheme } from '@mui/material/styles'

const colors = {
  light: {
    background: '#fbfbfa',
    paper: '#ffffff',
    text: '#20242d',
    secondaryText: '#667085',
    primary: '#4355d6',
    divider: '#e8e9ed',
  },
  dark: {
    background: '#111318',
    paper: '#191c23',
    text: '#f2f3f7',
    secondaryText: '#a4a9b5',
    primary: '#a8b0ff',
    divider: '#2b2f39',
  },
}

export function createPortfolioTheme(mode = 'light') {
  const palette = colors[mode] ?? colors.light

  return createTheme({
    palette: {
      mode,
      primary: { main: palette.primary, contrastText: mode === 'light' ? '#ffffff' : '#171925' },
      background: { default: palette.background, paper: palette.paper },
      text: { primary: palette.text, secondary: palette.secondaryText },
      divider: palette.divider,
      action: {
        hover: mode === 'light' ? 'rgba(32, 36, 45, 0.04)' : 'rgba(255, 255, 255, 0.06)',
      },
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 700, letterSpacing: '-0.055em', lineHeight: 1.04 },
      h2: { fontWeight: 650, letterSpacing: '-0.04em', lineHeight: 1.12 },
      h3: { fontWeight: 650, letterSpacing: '-0.025em', lineHeight: 1.2 },
      h4: { fontWeight: 650, letterSpacing: '-0.02em' },
      body1: { lineHeight: 1.8 },
      body2: { lineHeight: 1.7 },
      button: { fontWeight: 600, textTransform: 'none' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth', scrollPaddingTop: '88px' },
          body: { minWidth: 320 },
          '::selection': { backgroundColor: mode === 'light' ? '#dfe2ff' : '#414777' },
          a: { color: 'inherit' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 22, minHeight: 46 },
          containedPrimary: { boxShadow: 'none' },
        },
      },
      MuiChip: {
        styleOverrides: { root: { borderRadius: 999, fontWeight: 550 } },
      },
      MuiCard: {
        styleOverrides: {
          root: { backgroundImage: 'none', border: `1px solid ${palette.divider}`, boxShadow: 'none' },
        },
      },
    },
  })
}