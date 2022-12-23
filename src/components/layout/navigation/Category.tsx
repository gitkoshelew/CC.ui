import {FC, SyntheticEvent, useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Paper} from "@mui/material";
import {CategoryType} from "../../../Types/NavigationTypes";

export const Category: FC<CategoryType> = ({categories}) => {
    const [value, setValue] = useState(3)

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper
            sx={{
                borderRadius: '15px',
                p: {xs: '0 20px', sm: '0 50px', md: '0 20%'},
                '& .MuiTab-root': {
                    p: '16px 4px'
                }
            }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {categories.map((categoryName, index) => (
                    <Tab label={categoryName} key={index}
                    />
                ))}
            </Tabs>
        </Paper>
    );
}