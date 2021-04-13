import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function* tick() {
  while(true) {
    yield call(sleep, 1000);
    yield put({ type: 'SIMPLE_TICK' })
  }
}

export default tick;