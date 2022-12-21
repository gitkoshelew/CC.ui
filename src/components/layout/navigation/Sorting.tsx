import * as React from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export const Sorting = () => {
    const [value, setValue] = React.useState('1');
    const sort = ['Verify', 'Date', 'Popularity', 'Something else']

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            gap: 2.5
        }}>
            <Typography sx={{
                typography: 'subtitle1',
                color: 'text.primaryAlpha300'
            }}>
                Sorting
            </Typography>
            <Select
                sx={{
                    minWidth: 120,
                    height: 26,
                    bgcolor: 'primary.contrastText',
                    borderRadius: '10px',
                    typography: 'subtitle1',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'text.primary'
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            p: 0,
                            borderRadius: '10px',
                            "& .MuiMenuItem-root.Mui-selected": {
                                backgroundColor: "background.default"
                            },
                            "& .MuiMenuItem-root:hover": {
                                backgroundColor: "background.default"
                            },
                            "& .MuiMenuItem-root.Mui-selected:hover": {
                                backgroundColor: "background.default"
                            },
                            "& .MuiList-root": {
                                p: 0
                            },
                            "& .MuiButtonBase-root": {
                                p: '0 15px'
                            },
                        }
                    }
                }}
                value={value}
                onChange={handleChange}
            >
                {sort.map((item, index) => <MenuItem sx={{
                        typography: 'subtitle1',
                    }} key={index} value={index}>
                        {item}
                    </MenuItem>
                )}
            </Select>
        </Box>
    );
}
