import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {WithChild} from "../../common/types";

export const HeaderButtons: FC<WithChild> = ({children}) => {
    return (
        <Stack
            spacing={{xs:2, sm: 4}}
            direction={"row"}
            sx={{
                "& .MuiButton-contained": {
                    px: {xs: 2, md: 5},
                    py: {xs: 0.4, md: 0.75},
                    textTransform: "initial",
                    fontSize: "inherit",
                    "svg": {
                        width: {xs: 12, md: 16},
                        height: {xs: 12, md: 16}
                    }
                }
            }}
        >
            {children}
        </Stack>

    );
};

