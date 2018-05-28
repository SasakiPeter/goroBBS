import { connect } from 'react-redux';
import CommentAdd from '../components/CommentAdd';
import { readBoard, addComment } from '../actions'

const mapStateToProps = (state) => {
  return {
    id: state.selBoardReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (id, comment) => {
      const url = 'http://127.0.0.1:8000/api/board/' + id + '/comments/'
      fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': 'JWT ' + localStorage.getItem('jwt'),
          'content-type': 'application/json'
        },
        body: JSON.stringify(comment),
        mode: 'cors'
      })
        .then(response => response.json())
        .then(json => {
          console.log("POST成功: ", json)
          // board:{json}になった
          // ↓これいるの？←謎
          dispatch(addComment(json))
        })
        .catch(error => {
          console.log('コメントPOST失敗')
        })
    }
  }
}

const CCommentAdd = connect(mapStateToProps, mapDispatchToProps)(CommentAdd)

export default CCommentAdd;