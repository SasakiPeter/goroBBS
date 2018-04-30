import React from 'react';
import { connect } from 'react-redux';
import CommentAdd from '../components/CommentAdd';
import { readBoard, addComment } from '../actions/'

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (selBoard) => {
      const url = 'http://127.0.0.1:8000/api/board/' + id + '/'
 fetch(url, { method: 'POST' })
        .catch(error => {
          console.log('コメントPOST失敗')
        })
        .then(response => response.json())
        .then(json => {
          console.log('コメントPOSTできたはず')
          // board:{json}になった
          dispatch(addComment(json))
        })
    }
  }
}

const readComment=(selBoard)