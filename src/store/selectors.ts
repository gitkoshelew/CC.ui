import { AppState } from './store';

export const selectOneQuizes = (state: AppState) => state.quizes.oneQuizes;
export const selectResulData = (state: AppState) => state.resultData.result;
export const selectCheckedData = (state: AppState) => state.checkData.options;
