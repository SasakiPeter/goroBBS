import React from 'react';

const BoardLine = ({ title, onClick }) => {
  return (
    <li>
      <a onClick={() => onClick()}>{title}</a>
    </li>
  )
};

export default BoardLine;