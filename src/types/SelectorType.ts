export type SelectorType = {
  onPress?: <T>(selectedOptionValue: T | unknown) => void
  value?: string | number;
  type: TypeSwitchSelect;
};

export enum TypeSwitchSelect {
  LEVEL = 'level',
  NUMBER = 'number',
  FILTER = 'filter',
}
