import Link from "next/link";
import {Stack, Typography} from "@mui/material";
import {ArrowLeftIcon} from "../../assets/icons/ArrowLeftIcon";

export const ButtonBackHome = () => {

    return <Link href={'/'}>
        <Stack direction={'row'} alignItems={'center'} spacing={2} paddingLeft={6}>
            <ArrowLeftIcon/>
            <Typography
                sx={{
                    color: 'text.primaryAlpha300',
                    typography: 'subtitle1'
                }}
            >
                Back to tests
            </Typography>
        </Stack>
    </Link>
}