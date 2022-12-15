import React, {FC} from 'react';
import {WithChild} from "../../common/types";
import {Stack} from "@mui/material";

export const HeaderStack: FC<WithChild> = ({children}) => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={1}
            spacing={1}
            px={3}
            height={"60px"}
            sx={{
                "& .MuiIconButton-root": {
                    bgcolor: "background.default",
                    p: 0.8
                },
                "& .MuiTab-root": {
                    px: {xs: 0.5, md: 1},
                    mx: {xs: 0.5, md: 2},
                    minHeight: 25,
                    textTransform: "initial",
                    borderRadius: "10px",
                    fontSize: "inherit",
                    "&:hover": {
                        opacity: 0.8
                    }
                },
                "& .MuiTabs-root": {
                    minHeight: 25,
                },
            }}
        >
            {children}
        </Stack>
    );
};

