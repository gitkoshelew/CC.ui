import {Paper, Stack, Typography} from "@mui/material";
import {FC, ReactNode} from "react";

type WrapperNewTestType = {
    children: ReactNode
}

export const WrapperNewTest: FC<WrapperNewTestType> = ({children}) => {
    return <Stack direction={'row'} justifyContent={'center'}>
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                maxWidth: '850px',
                width: 1,
                p: '40px 52px 30px'
            }}
        >
            <Typography align={'center'}>
                Create test
            </Typography>
            {children}
        </Paper>
    </Stack>
}