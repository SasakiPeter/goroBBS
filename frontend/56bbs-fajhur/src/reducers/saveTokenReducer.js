// このLoginReducerの仕事は、LocalStorageにTokenを保存すること

const saveTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_TOKEN":
            return {
                username: action.token,
            }
        // in case of failure
        default:
            return state;
    }
};

export default saveTokenReducer;