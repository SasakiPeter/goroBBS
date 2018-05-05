import React from 'react';
import BoardLine from './BoardLine';

export default class BoardList extends React.Component {
  state = {
    list: []
  }

  componentWillMount() {
    const url = 'http://127.0.0.1:8000/api/board/'
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        console.log('ボードディスパッチできたよ！')

        // 初期値とか設定してあって、今までのlistにjsonをmargeするときは、
        // this.state.list.concat(json.map((b)=><BL/>))とすると便利
        // 現状だと、上書き設定になっている
        this.setState({
          list: json.map((b) =>
            <BoardLine
              key={b.id}
              title={b.title}
              onClick={() => this.props.onBoardClick(b.id)} />
          )
        });
      })
      .catch(error => {
        console.log('ボードディスパッチ出来ませんでしたorz')
      })
  }

  render() {
    return (
      <aside>
        <h3>新着</h3>
        <ul>{this.state.list}</ul>
      </aside>
    )
  }
};