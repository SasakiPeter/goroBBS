const selBoardReducer = (state = -1, action) => {
  switch (action.type) {
    case "SELECT_BOARD":
      return action.id
    default:
      return state
  }
};

export default selBoardReducer;