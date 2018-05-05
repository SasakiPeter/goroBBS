import React from 'react';
import CommentLine from './CommentLine';
import CCommentAdd from '../containers/CCommentAdd';

// commentsはjsonから取得したid,titleなどを含むコメントのlist
const CommentList = ({ board }) => {
  let list = []
  board.comments.map((b) => {
    list.push(
      <CommentLine
        key={b.id}
        comment={b.comment}
        pub_date={b.pub_date}
        votes={b.votes}
      />
    );
  })

  return (
    <ul>
      <h2>{board.title}</h2>
      {list}
      <CCommentAdd />
    </ul>
  )
};

export default CommentList;