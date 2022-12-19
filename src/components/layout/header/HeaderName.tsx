import React, {FC} from 'react';
import {Link} from "@mui/material";
import {WithChild} from "../../common/types";

export const HeaderName: FC<WithChild> = ({children}) => {
    return (
        <Link
            underline="hover"
            sx={{
                color: "primary.contrastText",
                cursor: "pointer",
                display: {xs: "none", sm: "initial"}
            }}
        >
            {children}
        </Link>
    );
};

