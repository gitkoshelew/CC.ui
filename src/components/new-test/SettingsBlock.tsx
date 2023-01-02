import {Box, Stack} from "@mui/material";
import {SuperInput} from "./SuperInput";
import {SuperSelect} from "./SuperSelect";
import {SelectChangeEvent} from "@mui/material/Select";
import {SuperButtonGroup} from "./SuperButtonGroup";

type SettingsBlockType = {
    value: string
    handleThemeChange: (event: SelectChangeEvent) => void
    items: string[]
    level: string[]
    numberQuestions: number[]
}

export const SettingsBlock = ({value, handleThemeChange, items, level, numberQuestions}: SettingsBlockType) => {

    return <Stack spacing={2}
        sx={{
            bgcolor: 'background.paperAccent2',
            p: 3,
            borderRadius: '20px',
            border: '1px solid transparent',
            borderColor: 'background.border',
        }}>
        <Stack direction={{xs: 'column', sm: 'row'}} spacing={3}>
            <Box sx={{flexGrow: 1}}>
                <SuperInput title={'Test title'} value={'Node.js'}/>
            </Box>
            <Box sx={{flexGrow: 2}}>
                <SuperInput title={'Test description'} value={'General questions about Node.js'}/>
            </Box>
        </Stack>
        <Stack direction={{xs: 'column', sm: 'row'}} flexWrap={'wrap'} spacing={3}>
            <Box flexGrow={1}>
                <SuperSelect title={'Theme'} value={value} items={items} handleChange={handleThemeChange}/>
            </Box>
            <Box flexGrow={1}>
                <SuperButtonGroup items={level} title={'Test level'}/>
            </Box>
            <Box flexGrow={1}>
                <SuperButtonGroup items={numberQuestions} title={'Number of questions'}/>
            </Box>
        </Stack>
    </Stack>
}