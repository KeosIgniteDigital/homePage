import { createTheme } from "@mui/material/styles";

//set base theme defaults so we can read values in sub theme
let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#4800C7",
      mainGradient:
        "radial-gradient(circle, #020024 0%, #090979 35%, #00d4ff 100%)",
      tonalOffset: 0.05,

      // main: "#C70039",
      light: "#FFC300",
      contrastText: "#FF7F50",
    },
    secondary: {
      main: "#FCC92C",
      light: "#FFC300",
    },
    warning: {
      main: "#E5AB2C",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#C70039",
      secondary: "#6c6c6c",
    },
    indigo: {
      300: "#EFEFEF",
    },

    gradientBlue: "radial-gradient(circle, #88DBFF 0%, #43C0F6 60%)",
    tonalOffset: 0.05,
  },

  typography: {
    fontFamily: ["consolas", "monospace", "sans-serif"].join(","),
    nunito: {
      fontFamily: ["helvetica", "times new roman", "sans-serif"].join(","),
    },
  },
  shape: {
    borderRadius: 20,
  },
});

//Sub theme composition
//Passing in the mainTheme object again so we can access the values from the base theme
mainTheme = createTheme(mainTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: "900",
          minWidth: "175px",
          fontSize: "20px",
          lineHeight: "1",
          letterSpacing: "1px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, .16)",
          padding: "11px 20px 9px 20px",
        },
        outlined: {
          border: `3px solid ${mainTheme.palette.primary.main}`,
          color: mainTheme.palette.text.secondary,
          backgroundColor: "#C70039",
          padding: "7px 20px",
          "&:hover": {
            border: `3px solid ${mainTheme.palette.primary.dark}`,
          },
        },
      },
    },
  },

  typography: {
    //using rem, it is relative to HTML root font size, it is good to use this way for accessibility

    h1: {
      fontSize: "3.75rem", // = 60px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
    h2: {
      fontSize: "2.625rem", // = 42px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
    "h2-black": {
      fontSize: "2.625rem", // = 30px
      fontWeight: "900",
      fontFamily: mainTheme.typography.nunito.fontFamily,
    },
    h3: {
      fontSize: "1.875rem", // = 30px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
    "h3-extra-bold": {
      fontSize: "1.875rem", // = 30px
      fontWeight: "800",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
    h4: {
      fontSize: "1.5rem", // = 24px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
    h5: {
      fontSize: "1.25rem", // = 20px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: mainTheme.palette.text.secondary,
    },
  },
});

export { mainTheme };
