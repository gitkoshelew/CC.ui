import {MenuItem, Select, Stack, Typography} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";

type SuperSelectType = {
    title: string
    value: string
    items: string[]
    handleChange: (event: SelectChangeEvent) => void
}

export const SuperSelect = ({title, value, items, handleChange}: SuperSelectType) => {

    return <Stack justifyContent={'space-between'} spacing={1}>
        <Typography typography={'inputTitle'}>
            {title}
        </Typography>
        <Select value={value} onChange={handleChange}>
            {items.map((item, index) => <MenuItem sx={{
                    typography: 'subtitle1',
                }} key={index} value={index}>
                    {item}
                </MenuItem>
            )}
        </Select>
    </Stack>
}