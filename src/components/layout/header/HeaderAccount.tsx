import React from 'react';
import {Avatar, Link} from "@mui/material";
import {AvatarIcon} from "../../../assets/icons/AvatarIcon";
import { userData } from '../../../Mocs/Moc';

export const HeaderAccount = () => {
    const {avatar, name} = userData

    return (
        <>
            {avatar
                ? <Avatar
                    sx={{width: 38, height: 37}}
                    src={avatar}
                    alt={"Avatar"}
                />
                : <AvatarIcon />
            }
            <Link
                underline="hover"
                display={{xs: "none", sm: "initial"}}
                color={"primary.contrastText"}
                sx={{cursor: "pointer"}}
            >
                {name}
            </Link>
        </>
    );
};

