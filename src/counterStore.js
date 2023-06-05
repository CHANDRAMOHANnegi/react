const incrementAction = () => ({ type: "INC" });
const decrementAction = () => ({ type: "DEC" });

const reducer = (state = 0, action) => {
  if (action.type === "INC") {
    return state + 1;
  }

  if (action.type === "DEC") {
    return state - 1;
  }

  return state;
};

export default reducer;
export { incrementAction, decrementAction };
