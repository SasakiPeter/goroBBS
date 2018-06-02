import React from 'react';
import CBoardList from '../containers/CBoardList';
import CCommentList from '../containers/CCommentList';
import CBoardAdd from '../containers/CBoardAdd';
import NavigationBar from './NavigationBar';


const App = () => {
  return (
    <div className="BBS">
      <NavigationBar />
      <div>
        <CBoardList />
        <section>
          <CBoardAdd />
          <CCommentList />
        </section>
      </div>
    </div>

  )
};

export default App;