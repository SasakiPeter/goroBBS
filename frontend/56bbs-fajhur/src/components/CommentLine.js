import React from 'react';

const CommentLine = ({ comment, pub_date, votes }) => {
  return (
    <li>
      ゴロ：{comment}|日付：{pub_date}|票数：{votes}
    </li>
  )
};

export default CommentLine;