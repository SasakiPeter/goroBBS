import React from 'react';

class BoardAdd extends React.Component {
  state = {
    board: ""
  }

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value }
    );
    console.log([event.target.name])
    console.log(event.target.value)
    console.log(this.state)
  };

  handleSubmit = () => {
    const { board } = this.state
    console.log(this.state)
    console.log(this.state.board)
    console.log({ board })
    console.log(board)

    // board_idをどこかで取得せねば！！！！！！！！！！！！！！！
    // stateに入ってるはず
    // selectBoardで
    // selBoardしたReducerを、CCommentAddでstateとして

    this.props.onAddBoard(board)
  }

  render() {
    // props,stateからそれぞれ取得する
    const { board } = this.state;
    console.log(this.props)
    return (
      <div>
        {//nameに入力値をいれてしまう
        }
        <input
          type="text"
          name="board"
          value={board}
          placeholder="add board"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}>ゴロを募集する</button>
      </div>
    )
  }
}

export default BoardAdd;