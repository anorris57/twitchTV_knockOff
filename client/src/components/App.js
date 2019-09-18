import React from 'react';
//Browser Router and Route  and Link (use instead of a tag)are actual components
import { HashRouter, Route, Link } from 'react-router-dom';
//react router cares only about characters after domain localhost:3000 extracted 'path'starts with /

const PageOne = () => {
  return (
  <div>
    PageOne
    <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  )
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button> Click Me! </button>
      <Link to="/">Navigate to Page One</Link> 
    </div>
  ) 
}

const App = () => {
  return (
      <HashRouter>
        <div>
        <Route path="/" exact={true} component={PageOne}/>
        <Route path="/pagetwo" component={PageTwo}/>
        </div>
      </HashRouter>
  )
}

export default App;


