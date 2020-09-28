import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/style.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Questions from "./Questions";
import Users from "./Users/Users";
import Tags from "./Tags";
import User from "./User";
import Profile from "./Profile";
import Question from "./Question";

function App() {
  return (
    <>
      <Router>
        <Header />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/questions/tagged/:tag" component={Questions} />
              <Route path="/questions" component={Questions} />
              {/*<Route path="/questions/favorite" component={FavoriteQuestions} />*/}
              <Route path="/question/:id" component={Question} />
              <Route path="/users" component={Users} />
              <Route path="/user/:id" component={User} />
              <Route path="/profile" component={Profile} />
              <Route path="/tags" component={Tags} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;