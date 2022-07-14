import { createTheme } from "@mui/material/styles";

//set base theme defaults so we can read values in sub theme
let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#82c3f5",
      // main: "#C70039",
      light: "#689cc4 ",
      contrastText: "#FCC92C",
      dark: "#486d89",
    },
    secondary: {
      main: "#f91c85",
      light: "#ff86c0",
    },
    warning: {
      main: "#eea4af",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#C70039",
      secondary: "#6c6c6c",
    },

    gradientBlue: "radial-gradient(circle, #88DBFF 0%, #43C0F6 60%)",
    tonalOffset: 0.05,
  },

  typography: {
    fontFamily: ["Candara", "times new roman", "sans-serif"].join(","),
    nunito: {
      fontFamily: ["Signika", "Signika-Light", "Signika-bold"].join(","),
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
          color: "#43C0F6",
          fontWeight: "900",
          minWidth: "175px",
          fontSize: "20px",
          lineHeight: "1",
          letterSpacing: "1px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, .16)",
          padding: "11px 20px 9px 20px",
        },
        outlined: {
          border: `3px solid #f91c85`,
          color: `#f91c85`,
          backgroundColor: "#f91c85",
          padding: "7px 20px",
          "&:hover": {
            border: `3px solid #f91c85`,
          },
          blueFull: {
            backgroundColor: "#43C0F6",
            border: "2px solid #43C0F6",
            color: "#ffffff",
            padding: "110%",
            Width: "330px",

            "&:hover": {
              color: "#43C0F6",
              background: "white",
              border: "12px solid #2bb8f5",
            },
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
      fontSize: "25px", // = 30px
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
    p: {
      fontSize: "1.25rem", // = 20px
      fontWeight: "700",
      fontFamily: mainTheme.typography.nunito.fontFamily,
      color: "gray",
    },
  },
});

export { mainTheme };
