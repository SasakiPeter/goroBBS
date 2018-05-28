// api から持ってきたBoardListを処理するためのreducer

const getBoardListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOARD_LIST_REQUEST":
      return state;
    case "FETCH_BOARD_LIST_SUCCESS":
      return [
        ...state,
        ...action.json,
      ]
    // in case of failure
    default:
      return state;
  }
};

export default getBoardListReducer;