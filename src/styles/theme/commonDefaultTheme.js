module.exports = {
    palette: {
        mode: "light",
        primary: {
            main: "#2D3E6B",
            contrastText: "#FFFFFF",
            dark: "#243664",
        },
        secondary: {
            main: "#6B9DE9",
            contrastText: "#ffffff",
        },
        background: {
            default: "#F2F2F2",
            defaultAccent1: "#DFDFDF",
            paper: "#FFFFFF",
            paperAccent1: "#FAFAFA",
            paperAccent2: "#F0F0F0",
            border: "rgba(0, 0, 0, 0.2)",
            shadow: "rgba(0, 0, 0, 0.2)"
        },
        info: {
            main: "#FFFFFF",
            contrastText: "#000",
        },
        error: {
            main: "#E96B6B",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#6B9DE9",
            contrastText: "#FFFFFF",
        },
        action: {
            active: "rgba(255,255,255,0.3)",
            selected: "rgba(107,157,233,0.5)",
            selectedOpacity: 0.5,
            activatedOpacity: 0.4,
            hover: "rgba(255, 255, 255, 0.05)",
            hoverOpacity: 0.15,
        },
        text: {
            primary: "rgba(0, 0, 0, 0.9)",
            primaryAlpha300: "rgba(0, 0, 0, 0.3)",
            primaryAlpha800: "rgba(0, 0, 0, 0.8)",
            secondary: "rgba(255, 255, 255, 0.9)",
            secondaryAlpha500: "rgba(255, 255, 255, 0.5)",
            disabled: "rgba(0, 0, 0, 0.38)",
            primaryAlpha300: "rgba(0, 0, 0, 0.30)",
        },
        divider: "rgba(255, 255, 255, 0.1)"
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: 16,
        h3: {
            fontWeight: 500,
            fontSize: '2.2rem'
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.75rem'
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.45rem'
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '0.9rem'
        },
        subtitle2: {
            fontWeight: 300,
            fontSize: '0.7rem'
        },
    },
    shape: {
        borderRadius: 20
    },
    breakpoints: {
        xs: 0, sm: 600, md: 1000, lg: 1200, xl: 1920
    },
};