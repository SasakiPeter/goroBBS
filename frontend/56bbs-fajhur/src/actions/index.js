export const addBoard = (json) => {
  return {
    type: "ADD_BOARD",
    json
  }
}

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

export const addComment = (json) => {
  return {
    type: "ADD_COMMENT",
    json
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

// Login
export const Login = (username, password) => {
  return {
    type: "LOGIN",
    username: username,
    password: password,
  }
}

export const saveToken = (token) => {
  return {
    type: "SAVE_TOKEN",
    token,
  }
}

// export default a っていうのがあったら、上のやつは a.saveTokenでとれる