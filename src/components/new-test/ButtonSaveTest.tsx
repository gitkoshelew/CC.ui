import {Button, Stack} from "@mui/material";

export const ButtonSaveTest = () => {

    return <Stack alignItems={'center'}>
        <Button variant={'contained'}
                sx={{
                    width: '132px',
                    height: '42px',
                    textTransform: 'inherit'
                }}>
            Save test
        </Button>
    </Stack>

}