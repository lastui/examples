import { delay, put } from "redux-saga/effects";

function* tick() {
  while (true) {
    yield delay(1000);
    yield put({ type: "SIMPLE_TICK" });
  }
}

export default tick;
