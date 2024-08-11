import { all, delay, fork, take, put, takeLeading } from "redux-saga/effects";

function* lazyBreak() {
  yield delay(1000);
  yield put({ type: 'TEST' })
  yield fork(fail);
}

function* fail() {
  throw new Error("saga of failing-saga-boundary throws");
}

function* observe() {
  while (true) {
    const action = yield take(['TEST', 'BEST']);
    console.log('failing saga boundary - saga observed action', action.type);
  }
}

export default function* () {
  yield all([
    lazyBreak(),
    observe(),
  ])
};
