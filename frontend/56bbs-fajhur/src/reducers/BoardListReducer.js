// BLAdd時のreload＆APIfetch
const BoardListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BOARD":
            return [
                ...state,
                action.json
            ]
        case "FETCH_BOARD_LIST_REQUEST":
            return state;
        case "FETCH_BOARD_LIST_SUCCESS":
            return [
                ...state,
                ...action.json,
            ]
        default:
            return state;
    }
};

export default BoardListReducer;