import { call, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function* tick() {
  while(true) {
    yield call(sleep, 1000);
    console.log('example tick')
  }
}

export default function* root() {
  yield fork(tick)
}