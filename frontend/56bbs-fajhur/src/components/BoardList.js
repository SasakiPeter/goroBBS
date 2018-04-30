import React from 'react';
import BoardLine from './BoardLine';

// export default class BoardList extends React.Component {
//   state = {
//     list: []
//   }
// componentWillMount() {
// const url = "http://127.0.0.1:8000/api/board/"
//     fetch(url, { method: 'GET'})
//       .catch(error => {
//         console.log('コメントディスパッチ出来ませんでしたorz')
//       })
//       .then(response => response.json())
//       .then(json => {
//         console.log('コメントディスパッチできたよ！')
//         // board:{json}になった
//       })
/*
const url = 'http://127.0.0.1:8000/api/board/'
fetch(url, { method: 'GET' })
  .then(response => response.json())
  .then(json => {
    console.log('ボードディスパッチできたよ！')
    const { list } = this.state.list
    json.map((b) => {
      list.push(
        <BoardLine
          key={b.id}
          title={b.title}
          onClick={() => onBoardClick(b.id)}
        />
      )
    })
  })
  .catch(error => {
    console.log('ボードディスパッチ出来ませんでしたorz')
  })
  */
// }

// ライフサイクルメソッドを使って、新着に表示されるAPIを取得する
//   render() {
//     return (
//       <aside>
//         <h3>新着</h3>
//         <ul>{this.state.list}</ul>
//       </aside>
//     )
//   }
// };

const BoardList = ({ datas, onBoardClick }) => {
  let list = []

  // console.log(datas);
  datas.map((b) => {
    list.push(
      <BoardLine
        key={b.id}
        title={b.title}
        onClick={() => onBoardClick(b.id)} />
    )
  })

  // ライフサイクルメソッドを使って、新着に表示されるAPIを取得する
  return (
    <aside>
      <h3>新着</h3>
      <ul>{list}</ul>
    </aside>
  )
};

export default BoardList;