import { call, fork } from "redux-saga/effects";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* lazyBreak() {
  while (true) {
    yield call(sleep, 1000);
    yield fork(fail);
  }
}

function* fail() {
  throw new Error("saga of failing-saga-boundary throws");
}

export default lazyBreak;
