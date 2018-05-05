// readBoard,fetchBoardListFailureはBoardの選択の時に使った
// selectBoardは意味がないかもしれない

export const selectBoard = (id) => {
  return {
    type: "SELECT_BOARD",
    id: id
  }
};

export const readBoard = (board) => {
  return {
    type: "READ_BOARD",
    board: board
  }
}

export const addComment = (comments) => {
  return {
    type: "ADD_COMMENT",
    comments: comments
  }
}

export const fetchBoardListRequest = () => {
  return {
    type: "FETCH_BOARD_LIST_REQUEST"
  }
};

// この引数にはapiから取得したjsonが入る
export const fetchBoardListSuccess = (json) => {
  return {
    type: "FETCH_BOARD_LIST_SUCCESS",
    json
  }
};

export const fetchBoardListFailure = () => {
  return {
    type: "FETCH_BOARD_LIST_FAILURE"
  }
};
