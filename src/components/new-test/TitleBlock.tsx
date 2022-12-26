import {Stack} from "@mui/material";
import {SuperInput} from "./SuperInput";
import {SuperSelect} from "./SuperSelect";
import {BlockTitleType} from "../../Types/NewTestTypes";

export const TitleBlock = ({value, handleThemeChange, items}: BlockTitleType) => {

    return <Stack direction={'row'} justifyContent={'space-between'}>
        <SuperInput title={'Test title'} value={'Node.js'}/>
        <SuperInput title={'Test description'} value={'General questions abone No'}/>
        <SuperSelect title={'Theme'} value={value} items={items} handleChange={handleThemeChange}/>
    </Stack>

}