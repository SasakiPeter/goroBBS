// このLoginReducerの仕事は、LocalStorageにTokenを保存するこ

// import { persistStore, persistCombineReducers } from "redux-persist"
// import storage from 'redux-@ersist/es/storage'
// // persistしたいreducer?
// import reducers from './reducers'

// const config = {
//     key: 'root',//??
//     storage,
// }

// const reducer = persistCombineReducers(config, reducers)

// const configureStore = () => {
//     let store = createStore(reducer)
//     let persistor = persistStore(store)
//     return {
//         persistor,
//         store,
//     }
// }


// なんとかしたい
const saveTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_TOKEN":
            console.log(action.token)
            console.log("saveTokenReducer.SAVE_TOKEN")
            localStorage.setItem('jwt', action.token)
            // return Object.assign({}, state, {
            //     token: action.token
            // })
            return state;
        // in case of failure
        default:
            return state;
    }
};

export default saveTokenReducer;