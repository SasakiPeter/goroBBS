import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = (state) => {
  console.log(state.getBoardReducer)
  return {
    // state.の後に来るのはReducer！！！
    board: state.getBoardReducer
  }
};

const CCommentList = connect(mapStateToProps, null)(CommentList);

export default CCommentList;