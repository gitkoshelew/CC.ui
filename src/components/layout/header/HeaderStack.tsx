import React, {FC} from 'react';
import {WithChild} from "../../common/types";
import {Stack} from "@mui/material";

export const HeaderStack: FC<WithChild> = ({children}) => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={1}
            px={3}
            py={1}
            sx={{"& .MuiTab-root": {mx: {xs: 0.5, md: 2}}}}
        >
            {children}
        </Stack>
    );
};

