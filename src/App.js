import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./Profile";
import Question from "./Question";

function App() {

  return (
    <>
      <Router>
        <Header />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/questions/" exact component={Main} />
              <Route path="/questions/tag/:id" component={Main} />
              <Route path="/users" exact component={Users} />
              <Route path="/users/:id" component={Profile} />
              <Route path="/tags" component={Tags} />
              <Route path="/questions/:id" component={Question} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;