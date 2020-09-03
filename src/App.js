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
              <Route path="/users" component={Users} />
              <Route path="/tags" component={Tags} />
              <Route path="/profile" component={Profile} />
              <Route path="/questions/:id" component={Question} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;


// function useLogger(value) {
//   useEffect(() => {
//     console.log('Value changed: ', value);
//   }, [value]);
// }
//
// function useInput(initialValue) {
//   const [value, setValue] = useState(initialValue);
//
//   const onChange = event => {
//     setValue(event.target.value);
//   };
//
//   const clear = () => {
//     setValue('');
//   };
//
//   return {
//     bind: {value, onChange},
//     value,
//     clear
//   };
// }
//
// function App() {
//   const input = useInput('');
//
//   useLogger(input.value);
//
//   return (
//     <div>
//       <input type="text" {...input.bind} />
//
//       <button onClick={() => input.clear()}>Clear</button>
//       <h1>{input.value}</h1>
//     </div>
//   );
// }