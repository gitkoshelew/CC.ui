import {Stack, TextField, Typography} from "@mui/material";
import {SuperInputType} from "../../Types/NewTestTypes";

export const SuperInput = ({title, width = '216px', value, children}: SuperInputType) => {

    return <Stack spacing={1}>
        {title && <Stack direction={'row'} justifyContent={'start'} alignItems={'center'} spacing={2}>
            <Typography
                sx={{
                    typography: 'subtitle1',
                    pl: '14px'
                }}
            >
                {title}
            </Typography>
            {children}
        </Stack>
        }
        <TextField value={value}
            sx={{
                '& .MuiInputBase-input': {
                    p: 0,
                    pl: '14px',
                    typography: 'subtitle1',
                    height: '42px',
                    width
                }
            }}
            InputProps={{
                sx: {
                    borderRadius: '15px',
                    bgcolor: 'background.paperAccent1'
                }
            }}
        />
    </Stack>
}