import React from 'react';
import {Stack} from "@mui/material";
import {Category} from "./Category";
import {Sorting} from "./Sorting";

export const Navigation = () => {
    return (
        <Stack
            direction={'column'}
            spacing={3}
        >
            <Category/>
            <Sorting/>
        </Stack>
    );
};