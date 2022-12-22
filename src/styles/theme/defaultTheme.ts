import {createTheme} from "@mui/material";
import commonDefaultTheme from "./commonDefaultTheme";

const commonTheme = ({
    palette: {...commonDefaultTheme.palette, mode: "light"},
    typography: {...commonDefaultTheme.typography},
    shape: {...commonDefaultTheme.shape},
    breakpoints: {...commonDefaultTheme.breakpoints}
} as const)

export const defaultTheme = createTheme({
    palette: commonTheme.palette,
    typography: commonTheme.typography,
    shape: commonTheme.shape,
    breakpoints: {
        values: commonTheme.breakpoints
    },

    components: {
        MuiButton: {
            defaultProps: {
                size: "large",
                variant: "contained",
                sx: {
                    px: {xs: 2.3, md: 4},
                    py: {xs: 0.4, md: 0.9},
                    textTransform: "initial",
                    fontSize: "inherit",
                    "svg": {
                        width: {xs: 12, md: 16},
                        height: {xs: 12, md: 16}
                    }
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    p: 0.8
                }
            }
        },
        MuiTab: {
            defaultProps: {
                sx: {
                    textTransform: "initial",
                    borderRadius: "10px",
                    px: {xs: 0.5, md: 1},
                    fontSize: "inherit",
                    "&:hover": {
                        opacity: 0.8
                    }
                }
            },
        },
        MuiTabs: {
            defaultProps: {
                textColor: "inherit",
                sx: {
                    "& .MuiTabs-indicator": {
                        bgcolor: "secondary.main",
                    },
                    '& .MuiTabs-flexContainer': {justifyContent: 'space-between'},
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 3,
                sx: {
                    bgcolor: "background.paper",
                    borderRadius: "shape.borderRadius"
                }
            }
        }
    }
})