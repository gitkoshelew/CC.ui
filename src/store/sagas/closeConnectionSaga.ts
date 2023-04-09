import { call } from '@redux-saga/core/effects';
import { webSocketApi } from '../../api/web-socket/webSocketApi';

export function* closeConnectionSaga() {
  yield call(webSocketApi.destroyConnection);
}

export const closeConnection = () => ({ type: 'CLOSE-CONNECTION' });
