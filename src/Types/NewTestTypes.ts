import {SelectChangeEvent} from "@mui/material/Select";
import {ReactNode} from "react";

export type BlockQuestionType = {
  value: string
  handleTypeChange: (event: SelectChangeEvent) => void
  items: string[]
}
export type QuestionsBlockType = {
  questions: number[]
}
export type SuperInputType = {
  title?: string
  width?: string
  value?: string
  children?: ReactNode
}
export type SuperSelectType = {
  title: string
  value: string
  items: string[]
  handleChange: (event: SelectChangeEvent) => void
}
export type BlockTitleType = {
  value: string
  handleThemeChange: (event: SelectChangeEvent) => void
  items: string[]
}
export type WrapperNewTestType = {
  children: ReactNode
}