// こいつの仕事はBoardをAddしたときに、BLの再読み込みをさせること
const addBoardListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BOARD":
            return [
                ...state,
                ...action.json
            ]
        default:
            return state;
    }
};

export default addBoardListReducer;