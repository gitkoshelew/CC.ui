import React from 'react';
import {Stack, Typography} from "@mui/material";

const statistic = [
    {name: "Tests", totalCount: 999},
    {name: "Materials", totalCount: 999},
    {name: "Users", totalCount: 999}
]

export const HeaderStatistic = () => {

    return (
        <Stack direction={"row"} spacing={5} margin={"auto 0 25px"}>
            {statistic.map(el => (
                <Stack key={el.name}>
                    <Typography sx={{typography: {xs: "h5",sm: "h4"}}}>
                        {el.totalCount}
                    </Typography>
                    <Typography sx={{typography: {xs: "subtitle2", sm: "subtitle1"}, mt: -0.4}}>
                    {el.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
};

