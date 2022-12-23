import {Stack, Typography} from "@mui/material";
import {ArrowBottomIcon} from "../../assets/icons/ArrowBottomIcon";
import {BasketIcon} from "../../assets/icons/BasketIcon";
import {FC} from "react";
import {QuestionsBlockType} from "../../Types/NewTestTypes";

export const QuestionsBlock: FC<QuestionsBlockType> = ({questions}) => {

    return <Stack spacing={1.5}>
        {questions.map((question, index) => {
            return <Stack key={index} direction={'row'} justifyContent={'start'} alignItems={'center'} spacing={2}>
                <Typography
                    sx={{
                        typography: 'subtitle1',
                    }}
                >
                    {question}. Question: Which core module in Node can you use for testing?
                </Typography>
                <ArrowBottomIcon/>
                <BasketIcon/>
            </Stack>
        })}
    </Stack>
}