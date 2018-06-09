import React from 'react';
import { Input, Button, message } from 'antd';
const { TextArea } = Input;

class CommentAdd extends React.Component {
  state = {
    goro: "",
    commentary: "",
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
    const { goro, commentary } = this.state
    console.log(this.state)
    console.log(this.state.goro)
    console.log({ goro })
    console.log(goro)

    // board_idをどこかで取得せねば！！！！！！！！！！！！！！！
    // stateに入ってるはず
    // selectBoardで
    // selBoardしたReducerを、CCommentAddでstateとして

    const id = this.props.id
    console.log(id)
    if (goro === "") {
      message.error('ゴロを入力してください。')
    } else if (commentary === "") {
      message.error('解説を入力してください。')
    }
    else {
      const comment = {
        "goro": goro,
        "commentary": commentary,
      }
      this.props.onAddComment(id, comment)
    }

    // ここで、{comment}とすると入力値が取得できるので、これをAPIにPOSTすればよいはず
    // POSTする関数をcontainerで作って、それをimportすればいい
    // でも、classcomponentにprops渡すのってどうするの？
    // →this.props.onAddComment
  }

  render() {
    // props,stateからそれぞれ取得する
    const { goro, commentary } = this.state;
    console.log(this.props)
    return (
      <div>
        <TextArea
          name="goro"
          value={goro}
          placeholder="ゴロ"
          autosize
          onChange={this.handleChange}
        />
        <TextArea
          name="commentary"
          value={commentary}
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