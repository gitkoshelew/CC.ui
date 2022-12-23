import {FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {ArrowUpIcon} from "../../assets/icons/ArrowUpIcon";
import {BasketIcon} from "../../assets/icons/BasketIcon";
import {PlusIcon} from "../../assets/icons/PlusIcon";
import {SuperSelect} from "./SuperSelect";
import {SuperInput} from "./SuperInput";
import {BlockQuestionType} from "../../Types/NewTestTypes";

export const QuestionBlock = ({value, handleTypeChange, items}: BlockQuestionType) => {

    return <Stack spacing={2}>
        <Stack direction={'row'} justifyContent={'space-between'}>
            <SuperInput title={'1. Question'} width={'458px'} value={'Which core module in Node can you use for testing?'}>
                <ArrowUpIcon/>
                <BasketIcon/>
            </SuperInput>
            <SuperSelect title={'Questions type:'} value={value} items={items} handleChange={handleTypeChange}/>
        </Stack>
        <Stack spacing={1}>
            <Typography
                sx={{
                    typography: 'subtitle1',
                    pl: '14px'
                }}
            >
                Answer choice
            </Typography>
            <Stack direction={'row'} justifyContent={'start'} spacing={2}>
                <SuperInput width={'458px'} value={'jest'}/>
                <RadioGroup
                    sx={{
                        '& .MuiTypography-root': {
                            typography: 'subtitle1',
                        }
                    }}
                >
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="correct answer"/>
                </RadioGroup>
            </Stack>
            <Stack direction={'row'} justifyContent={'start'} spacing={2}>
                <SuperInput width={'458px'} value={'assets'}/>
                <RadioGroup
                    sx={{
                        '& .MuiTypography-root': {
                            typography: 'subtitle1',
                        }
                    }}
                    value={'correct answer'}
                >
                    <FormControlLabel value="correct answer" control={<Radio/>} label="correct answer"/>
                </RadioGroup>
            </Stack>
            <Stack direction={'row'} justifyContent={'start'} alignItems={'center'} spacing={2}
                   paddingLeft={3}>
                <PlusIcon/>
                <Typography
                    sx={{
                        typography: 'subtitle1',
                    }}
                >
                    Add answer
                </Typography>
            </Stack>
        </Stack>
    </Stack>
}