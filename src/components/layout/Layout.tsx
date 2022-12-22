import React, {FC} from 'react';
import {Header} from "./header/Header/Header";
import {FullHeader} from "./header/FullHeader/FullHeader";
import {Box} from "@mui/material";

type LayoutPropsType = {
    children: React.ReactNode;
    header?: "full" | "default"
}
const headersMap: any = {
    default: Header,
    full: FullHeader
}

export const Layout: FC<LayoutPropsType> = ({children, header = "default"}) => {
    const HeaderComponent = headersMap[header]

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            typography: {xs: "subtitle1", sm: "fontSize"},
            gap: 3,
            p: 2
        }}>
            <HeaderComponent/>

            {children}
        </Box>
    );
};

