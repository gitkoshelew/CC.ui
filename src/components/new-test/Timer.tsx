import {Stack, TextField, Typography} from "@mui/material";

export const Timer = () => {

    return <Stack spacing={1}>
        <Typography typography={'inputTitle'}>
            Timer
        </Typography>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <TextField value={'05'}/>
            <Typography>:</Typography>
            <TextField value={'00'}/>
        </Stack>
    </Stack>
}