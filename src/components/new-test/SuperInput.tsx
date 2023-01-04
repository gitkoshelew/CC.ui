import {Box, FormControlLabel, Radio, Stack, TextField, Typography} from "@mui/material";

type SuperInputType = {
    title?: string
    value?: string
    checkbox?: boolean
}

export const SuperInput = ({title, value, checkbox = false}: SuperInputType) => {

    return <Stack spacing={1}>
        {title && <Typography typography={'inputTitle'}
        >
            {title}
        </Typography>
        }
        {checkbox
            ? <Stack direction={'row'} alignItems={'center'} spacing={3}>
                <Box sx={{flexGrow: 1}}>
                    <SuperInput value={value}/>
                </Box>
                <FormControlLabel control={<Radio sx={{
                    '&, &.Mui-checked': {
                        color: 'secondary.main',
                    },
                }}/>} label=""/>
            </Stack>
            : <TextField value={value}/>}
    </Stack>
}