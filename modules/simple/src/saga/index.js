import { all, take, delay, put, select } from "redux-saga/effects";

function* tick() {
  while (true) {
    const tick = yield select((state) => state.ticker);
    //console.log("saga observes tick", tick);
    yield delay(1000);
    yield put({ type: "SIMPLE_TICK" });
  }
}

function* observe() {
  while (true) {
    const action = yield take('$failing-saga-boundary$TEST');
    console.log('simple saga - saga observed action', action.type);
  }
}

export default function* () {
  yield all([
    tick(),
    observe(),
  ])
};


