import { connect } from 'react-redux';
import { selectBoard, readBoard, fetchBoardListFailure, fetchBoardListSuccess } from '../actions/';
import BoardList from '../components/BoardList';


const mapStateToProps = (state) => {
  return {
    boards: state.BoardListReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // BL再読み込み君
    reloadBoardList: () => {
      const url = 'http://127.0.0.1:8000/api/board/'
      fetch(url, { method: 'GET', mode: "cors" })
        .then(response => response.json())
        .then(json => {
          dispatch(fetchBoardListSuccess(json))
          console.log(json)
          console.log('ボードディスパッチできたよ！')
        })
        .catch(error => {
          console.log('ボードディスパッチ出来ませんでしたorz', error)
        })
    },
    // boardを選択したとき、idを取得
    // boardLineにpropsとして渡している
    // Boardをクリックしたときに、対応するAPIを取得して、commentsに格納してCommentListにpropsとして渡したい
    // いや違う、stateのcommentsを変えて、それはCCommentListで取得させる
    onBoardClick: (id) => {
      // 思ったけどこのselectBoardってactionいらないんじゃない？
      // でも一応。これがあると、表示中のBoardのIDがわかるのか
      // ↑CommentAddで表示中のBoardの選択に使う
      dispatch(selectBoard(id))

      const url = "http://127.0.0.1:8000/api/board/" + id + "/"
      console.log(url)
      fetch(url, { method: 'GET', mode: 'cors' })
        .then(response => response.json())
        .then(json => {
          console.log('コメントディスパッチできたよ！')
          // board:{json}になった
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