import React from 'react';
//Browser Router and Route are actual components
import { BrowserRouter, Route } from 'react-router-dom';
//react router cares only about characters after domain localhost:3000 = localhost:3000/

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return <div>
    PageTwo
    <button> Click Me! </button>
    </div>;
}

const App = () => {
  return (
      <BrowserRouter>
        <div>
        <Route path="/" exact component={PageOne}/>
        <Route path="/pagetwo" component={PageTwo}/>
        </div>
      </BrowserRouter>
  )
}

export default App;


