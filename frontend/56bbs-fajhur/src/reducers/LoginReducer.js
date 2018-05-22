const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                username: action.username,
                password: action.password,
            }
        // in case of failure
        default:
            return state;
    }
};

export default LoginReducer;