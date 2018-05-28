import { connect } from 'react-redux';
import BoardAdd from '../components/BoardAdd';
import { addBoard } from '../actions';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBoard: (title) => {
      const url = 'http://127.0.0.1:8000/api/board/'
      fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': 'JWT ' + localStorage.getItem('jwt'),
          'content-type': 'application/json'
        },
        body: JSON.stringify({ title: title }),
        mode: 'cors'
      })
        .then(response => response.json())
        .then(json => {
          console.log("POST成功: ", json)
          // board:{json}になった
          // Board追加したときに、更新する設定にしよう
          dispatch(addBoard(json))
        })
        .catch(error => {
          console.log('コメントPOST失敗')
        })
    }
  }
};

const CBoardAdd = connect(mapStateToProps, mapDispatchToProps)(BoardAdd);

export default CBoardAdd;