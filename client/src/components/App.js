import React from 'react';
//Browser Router and Route  and Link (use instead of a tag)are actual components
import { Router, Route} from 'react-router-dom';
//react router cares only about characters after domain localhost:3000 extracted 'path'starts with /
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';



const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/"  exact component={StreamList} />
          <Route path="/streams/new"  exact component={StreamCreate} />
          <Route path="/streams/edit"  exact component={StreamEdit} />
          <Route path="/streams/delete"  exact component={StreamDelete} />
          <Route path="/streams/show"  exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}

export default App;


