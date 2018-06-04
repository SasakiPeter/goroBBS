import React from 'react';
import { Select, Input, Button, message } from 'antd';
const Option = Select.Option;
const { TextArea } = Input;


// dbで管理したい
// dbでタグを記録した後に、取得するputで
// その形式は、key(id)とtagが入ったやつ

// どうでもいいけどtoStringにすると、引数進数になる
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option
      key={i.toString(36) + i}
    >{i.toString(36) + i}</Option>
  )
}


class BoardAdd extends React.Component {
  state = {
    board: "",
    tags: [],
  }
  // 本来下と同じでいいはず
  handleChangeTag = event => {
    this.setState(
      { tags: event }
    );
    console.log(event)
    console.log(this.state)
  };

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value }
    );
    console.log([event.target.name])
    console.log(event.target.value)
    console.log(this.state)
  };

  handleSubmit = () => {
    const { board, tags } = this.state
    console.log(this.state)
    console.log(this.state.board)
    console.log({ board })
    console.log(board)

    // board_idをどこかで取得せねば！！！！！！！！！！！！！！！
    // stateに入ってるはず
    // selectBoardで
    // selBoardしたReducerを、CCommentAddでstateとして
    if (board == "") {
      message.error('投稿内容は空欄にはできません。')
    } else {
      this.props.onAddBoard(board)
    }



    // tagsを追加する挙動が必要
  }

  render() {
    const { board, tags } = this.state;
    console.log(this.props)
    return (
      <div>
        <Select
          name="tags"
          mode="tags"
          // size="large"
          placeholder="Please select"
          defaultValue={['薬学']}
          onChange={this.handleChangeTag}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
        <TextArea
          name="board"
          value={board}
          placeholder="覚えたいコンテンツを入力してください。"
          autosize
          onChange={this.handleChange}
        />
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >ゴロを募集する</Button>
      </div >
    )
  }
}

export default BoardAdd;