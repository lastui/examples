import { delay, put, select } from "redux-saga/effects";

function* tick() {
  while (true) {
    const tick = yield select((state) => state.ticker);
    console.log('saga observes tick', tick);
    yield delay(1000);
    yield put({ type: "SIMPLE_TICK" });
  }
}

export default tick;
