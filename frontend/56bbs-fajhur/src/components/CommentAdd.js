import React from 'react';
import { Input, Button, message } from 'antd';
const { TextArea } = Input;

class CommentAdd extends React.Component {
  state = {
    comment: ""
  }

  // このイベントはinputのこと
  // なんでここわざわざevent.target.nameってかいているのだろう？
  // 直接commentって書いちゃいかんのか？
  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value }
    );
    console.log([event.target.name])
    console.log(event.target.value)
    console.log(this.state)
  };

  handleSubmit = () => {
    const { comment } = this.state
    console.log(this.state)
    console.log(this.state.comment)
    console.log({ comment })
    console.log(comment)

    // board_idをどこかで取得せねば！！！！！！！！！！！！！！！
    // stateに入ってるはず
    // selectBoardで
    // selBoardしたReducerを、CCommentAddでstateとして

    const id = this.props.id
    console.log(id)
    if (comment === "") {
      message.error('ゴロを入力してください。')
    } else {
      this.props.onAddComment(id, { comment })
    }

    // ここで、{comment}とすると入力値が取得できるので、これをAPIにPOSTすればよいはず
    // POSTする関数をcontainerで作って、それをimportすればいい
    // でも、classcomponentにprops渡すのってどうするの？
    // →this.props.onAddComment
  }

  render() {
    // props,stateからそれぞれ取得する
    const { comment } = this.state;
    console.log(this.props)
    return (
      <div>
        <TextArea
          name="comment"
          value={comment}
          placeholder="ゴロ"
          autosize
          onChange={this.handleChange}
        />
        <TextArea
          name="comment"
          value={comment}
          placeholder="解説"
          autosize
          onChange={this.handleChange}
        />
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >追加</Button>
      </div>
    )
  }
}

export default CommentAdd;