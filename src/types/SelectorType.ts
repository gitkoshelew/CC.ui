export type SelectorDifficultyType = {
  onPressDifficulty?: <T>(selectedOptionValue: T | unknown) => void;
  valueDifficulty?: string | number;
  type: TypeSwitchSelect;
};

export type SelectorNOQType = {
  onPressNOQ?: <T>(selectedOptionValue: T | unknown) => void;
  valueNOQ?: string | number;
  type: TypeSwitchSelect;
};

export type SelectorTypeOfQuestionType = {
  onPressType?: <T>(selectedOptionValue: T | unknown) => void;
  valueType?: string | number;
  type: TypeSwitchSelect;
};

export enum TypeSwitchSelect {
  DIFFICULTY = 'difficulty',
  TYPE = 'type',
  NUMBER = 'number',
  FILTER = 'filter',
}
