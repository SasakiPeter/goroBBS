import React from 'react';
import CBoardList from '../containers/CBoardList';
import CCommentList from '../containers/CCommentList';
import CBoardAdd from '../containers/CBoardAdd';
import CLoginSection from '../containers/CLoginSection';

const App = () => {
  return (
    <div className="BBS">
      <nav>
        <h1>navigationbar</h1>
        <CLoginSection />
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