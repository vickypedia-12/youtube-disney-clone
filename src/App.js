
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/login";
import Header from "./components/Header"
import './App.css';
import Home from "./components/home";
import Detail from "./components/detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path = "/detail/:id">
          <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
