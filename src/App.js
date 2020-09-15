import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./profile/Profile";
import Question from "./Question";
import Search from "./Search";

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
              <Route path="/questions/:id" component={Question} />
              <Route path="/search/:id" component={Search} />
              <Route path="/users" exact component={Users} />
              <Route path="/users/:id" component={Profile} />
              <Route path="/profile" component={Profile} />
              <Route path="/tags" component={Tags} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;