import React, {FC} from 'react';
import {Card} from "@mui/material";
import {WithChild} from "../../../common/types";

export const FullHeaderWrapper: FC<WithChild> = ({children}) => {
    return (
        <Card sx={{
            backgroundColor: "primary.main",
            backgroundImage: "url('https://i.imgur.com/BanONvM.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: {xs: 310, sm: 360},
            overflow: "hidden",
            color: "primary.contrastText",
        }}>
            {children}
        </Card>
    );
};

