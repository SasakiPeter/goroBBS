import React from 'react';

const BoardAdd = ({ onClick }) => {
  let inpCom
  return (
    <div>
      <textarea rows="4"
        ref={(node) => { inpCom = node }} />
      {/* <button onClick={() => {
        if (inpCom.value.trim() == "") {
          return
        }
        if (selBoardReducer == -1) {
          alert("このalertに意味はあるのか？")
          return
        }
      }}>ゴロを募集する</button> */}
      <button>ゴロを募集する</button>
    </div >
  )
};

export default BoardAdd;