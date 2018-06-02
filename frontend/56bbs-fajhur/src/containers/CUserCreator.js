import { connect } from 'react-redux';
import UserCreator from '../components/UserCreator';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (username, email, password) => {
            const url = 'http://127.0.0.1:8000/api/user/create/'
            let formData = new FormData();
            formData.append('name', username);
            formData.append('email', email);
            formData.append('password', password);
            fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'cors'
            })
                // responseはtoken
                .then(response => response.json())
                .then(json => {
                    console.log("CreateUser成功: ", json)
                    // jsonにはtoken:...のobjが入ってる
                    // jsonをuserのlocalStorageに保存する 
                    // ここのactionはToken
                    // dispatch(saveToken(json.token))
                })
                .catch(error => {
                    console.log('CreateUser失敗')
                })
        }
    }
}

const CUserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreator);

export default CUserCreator;