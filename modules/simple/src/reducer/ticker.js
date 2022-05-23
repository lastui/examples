export default (state = 0, action) => {
  switch (action.type) {
    case "SIMPLE_TICK": {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};