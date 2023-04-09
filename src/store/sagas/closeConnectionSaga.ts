import { call, put } from '@redux-saga/core/effects';
import { webSocketApi } from '../../api/web-socket/webSocketApi';
import { addNot } from '../reducers/errorHandler-reducer';

export function* createConnectionSaga() {
  try {
    yield call(webSocketApi.createConnection);
  } catch (e) {
    yield put(
      addNot({
        noticeText: 'Web-socket chanel is closed',
        noticeStatus: 'error',
      })
    );
    yield call(webSocketApi.destroyConnection);
  }
}

export const createConnection = () => ({ type: 'CREATE-CONNECTION' });
