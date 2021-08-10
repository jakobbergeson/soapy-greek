const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  breakpoints: ["480px", "600px", "768px", "992px", "1280px", "1440px"],

  fonts: {
    body: '\'Cinzel\', serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.6,
    heading: 1.109375
  },
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: "#d8d8d8",
    lightgray: "#f5f5f5",
    // primary is for buttons and dark backgrounds, use "text" for content/text.
    primary: "#f6f6f6",
    secondary: "#ffffff",
    text: "#333333",
    anchorColor:"#49048f",
    anchorBackground: "#eee8f3",
    disabled: "#c4c4c4",
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      display: 'block',
      color: 'text',
      transitions: 'color 0.4s',
      "&hover": {
        color:'anchorColor',
        bg: 'anchorBackground'
      }

    }
  }
}

export default theme
