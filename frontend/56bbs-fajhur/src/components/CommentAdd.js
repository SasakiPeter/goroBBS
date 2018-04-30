import React from 'react';

class CommentAdd extends React.Component {

  state = {
    comment: ""
  }

  // このイベントはinputのこと
  // なんでここわざわざevent.target.nameっていているのだろう？
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
    console.log({comment})
    console.log(comment)
    // ここで、{comment}とすると入力値が取得できるので、これをAPIにPOSTすればよいはず
    // POSTする関数をcontainerで作って、それをimportすればいい
  }

  render() {
    // props,stateからそれぞれ取得する
    const { comment } = this.state
    return (
      <li>
        {//nameに入力値をいれてしまう
        }
        <input
          name="comment"
          value={comment}
          placeholder="add comment"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}>add</button>
      </li>
    )
  }
}

export default CommentAdd