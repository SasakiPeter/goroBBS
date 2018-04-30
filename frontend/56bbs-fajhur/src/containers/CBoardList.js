import { connect } from 'react-redux';
import { selectBoard, readBoard, fetchBoardListFailure } from '../actions/';
import BoardList from '../components/BoardList';


const mapStateToProps = (state) => {
  return {
    datas: [{
      id: 1,
      title: "セリ科の生薬"
    }, {
      id: 2,
      title: "マメ科の生薬"
    }],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // boardを選択したとき、idを取得
    // boardLineにpropsとして渡している
    // Boardをクリックしたときに、対応するAPIを取得して、commentsに格納してCommentListにpropsとして渡したい
    // いや違う、stateのcommentsを変えて、それはCCommentListで取得させる
    onBoardClick: (id) => {
      // 思ったけどこのselectBoardってactionいらないんじゃない？
      // でも一応。これがあると、表示中のBoardのIDがわかるのか
      dispatch(selectBoard(id))

      const url = "http://127.0.0.1:8000/api/board/" + id + "/"
      console.log(url)
      fetch(url, { method: 'GET' })
        .then(response => {
          response.json()
          console.log(response.json())
        })
        .then(json => {
          console.log('コメントディスパッチできたよ！')
          // board:{json}になった
          console.log(json)
          dispatch(readBoard(json))
        })
        .catch(error => {
          console.log('コメントディスパッチ出来ませんでしたorz')
          dispatch(fetchBoardListFailure())
        })
    },
  }
};

const CBoardList = connect(mapStateToProps, mapDispatchToProps)(BoardList)

export default CBoardList;