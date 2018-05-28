import React from 'react';
import BoardLine from './BoardLine';

export default class BoardList extends React.Component {
  componentWillMount() {
    this.props.reloadBoardList()
  }

  render() {
    const boards = this.props.boards.map((b) =>
      <BoardLine
        key={b.id}
        title={b.title}
        onClick={() => this.props.onBoardClick(b.id)} />
    )

    return (
      <aside>
        <h3>新着</h3>
        <ul>{boards}</ul>
      </aside>
    )
  }
};