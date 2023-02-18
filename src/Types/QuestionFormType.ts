export type QuestionFormType = {
  "title": string,
  "content": ContentType,
  "type": "single" | "multi",
  "difficulty": "light" | "medium" | "hard",
  "description": string,
  "timer": number
}

export type ContentType = {
    "options": string[],
    "correctAnswer": string[]
}
