import React from 'react';
import CBoardList from '../containers/CBoardList';
import CCommentList from '../containers/CCommentList';
import CBoardAdd from '../containers/CBoardAdd';
import CLoginSection from '../containers/CLoginSection';
import CUserCreator from '../containers/CUserCreator';

const App = () => {
  return (
    <div className="BBS">
      <nav>
        <h1>navigationbar</h1>
        <CLoginSection />
        <CUserCreator />
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