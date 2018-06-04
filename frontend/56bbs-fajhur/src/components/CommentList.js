import React from 'react';
import CommentLine from './CommentLine';
import CCommentAdd from '../containers/CCommentAdd';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';




// dataIndexが表示させる情報と、columnsを紐づけている
const columns = [{
  title: "comment",
  dataIndex: "comment",
  key: "comment",
}, {
  title: "pub_date",
  dataIndex: "pub_date",
  key: "pub_date",

}, {
  title: "votes",
  dataIndex: "votes",
  key: "votes",
}];


// commentsはjsonから取得したid,titleなどを含むコメントのlist
// const CommentList = ({ board }) => {
//   const data = [];

//   board.comments.map((b) => {
//     data.push({
//       key: b.id,
//       comment: b.comment,
//       pub_date: b.pub_date,
//       votes: b.votes,
//     });
//   })
// }

// const expandedRowRender = record => <p>{record.description}</p>;
// const title = () => 'Here is title';
// const showHeader = true;
// const footer = () => 'Here is footer';
// const scroll = { y: 240 };
// const pagination = { position: 'bottom' };

// class CommentList extends React.Component {
//   state = {
//     bordered: false,
//     loading: false,
//     pagination,
//     size: 'default',
//     expandedRowRender,
//     title: undefined,
//     showHeader,
//     footer,
//     rowSelection: {},
//     scroll: undefined,
//   }

//   render() {
//     const state = Object.assign({}, this.state);
//     return (
//       <Table columns={columns} dataSource={data} />
//     );
//   }
// }


// commentsはjsonから取得したid, titleなどを含むコメントのlist
const CommentList = ({ board }) => {
  let data = []
  // ゴロの解説もつけよう
  //　Djangoのmodel書き換え必要
  board.comments.map((b) => {
    data.push({
      key: b.id,
      comment: b.comment,
      pub_date: b.pub_date,
      votes: b.votes,
      children: [{ comment: b.comment }],
    });
  })
  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        // bordered
        title={() => board.title}
        footer={() => "Footer"}
        pagination={false}
      />
      <CCommentAdd />
    </div>
  )
};


// commentsはjsonから取得したid,titleなどを含むコメントのlist
// const CommentList = ({ board }) => {
//   let list = []
//   board.comments.map((b) => {
//     list.push(
//       <CommentLine
//         key={b.id}
//         comment={b.comment}
//         pub_date={b.pub_date}
//         votes={b.votes}
//       />
//     );
//   })

//   return (
//     <ul>
//       <h2>{board.title}</h2>
//       {list}
//       <CCommentAdd />
//     </ul>
//   )
// };

export default CommentList;