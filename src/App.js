import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Questions from "./Questions";

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
              {/*<Route path="/questions/" exact component={Main} />*/}
              {/*<Route path="/questions/tag/:id" component={Main} />*/}
              {/*<Route path="/questions/favorite" component={FavoriteQuestions} />*/}
              {/*<Route path="/questions/:id" component={Question} />*/}
              {/*<Route path="/search/:id" component={Search} />*/}
              {/*<Route path="/users" component={Users} />*/}
              {/*<Route path="/user/:id" component={Profile} />*/}
              {/*<Route path="/profile" component={Profile} />*/}
              {/*<Route path="/tags" component={Tags} />*/}
              {/*<Route path="/" component={Main} />*/}
            </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;