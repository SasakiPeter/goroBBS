const initialState = {
  id: null,
  title: null,
  published_at: null,
  updated_at: null,
  comments: []
}

const getBoardReducer = (state = initialState, action) => {
  // console.log('How are you?')
  // console.log("ACTION: " + action.type)
  // console.log(action.board)
  switch (action.type) {
    case "READ_BOARD":
      return {
        // これ展開して上書きしているらしいね
        ...state,
        ...action.board
      }
    default:
      return state;
  }
}

export default getBoardReducer;