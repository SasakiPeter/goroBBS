import { connect } from 'react-redux';
import LoginSection from '../components/LoginSection';
import { saveToken } from '../actions'

const mapStateToProps = (state) => {
    console.log(state.LoginReducer)
    return {
        // // username,passwordを持つuser
        // user: state.LoginReducer
    }
};

// Login情報をDjangoに投げて、Tokenもらいたい
const mapDispatchToProps = (dispatch) => {
    return {
        getJWT: (username, password) => {
            const url = 'http://127.0.0.1:8000/login/'
            let formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'cors'
            })
                // responseはtoken
                .then(response => response.json())
                .then(json => {
                    console.log("LoginPOST成功: ", json)
                    // jsonにはtoken:...のobjが入ってる
                    // jsonをuserのlocalStorageに保存する 
                    // ここのactionはToken
                    dispatch(saveToken(json.token))
                })
                .catch(error => {
                    console.log('LoginPOST失敗')
                })
        },

        // localStorageのkeyを消したい
        postLogout: () => {
            localStorage.removeItem("jwt");
        }
    }
}

const CLoginSection = connect(mapStateToProps, mapDispatchToProps)(LoginSection);

export default CLoginSection;