import React from 'react';
import CBoardList from '../containers/CBoardList';
import CCommentList from '../containers/CCommentList';
import CBoardAdd from '../containers/CBoardAdd';

const App = () => {
  return (
    <div className="BBS">
      <nav>
        <h1>navigationbar</h1>
      </nav>
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