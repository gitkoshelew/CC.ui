import React, {FC} from 'react';
import {WithChild} from "../../../common/types";
import {Card} from "@mui/material";

export const HeaderWrapper: FC<WithChild> = ({children}) => {
    return (
        <Card sx={{
            background: "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255," +
                " 0.1)), url('https://i.imgur.com/LAyoKOG.png')",
            backgroundSize: "cover",
            bgcolor: "primary.main",
            color: "primary.contrastText"
        }}>
            {children}
        </Card>
    );
};

