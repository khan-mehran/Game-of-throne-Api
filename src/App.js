import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import './App.css';
import { Fetch } from './components/Fetch';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { List } from './components/List';
import { Not_found } from './components/Not_found';
import { Todo } from './components/Todo';
import UserDetaul from './components/UserDetaul';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Header/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/fetch' component={Fetch} />
          <Route path='/list' component={List} />
          <Route path='/todo' component={Todo} />
          <Route path='/fetch/:id' component={UserDetaul} />
          <Route path='*' component={Not_found} />
          </Switch>
      </Router>
      {/* <Fetch/> */}
      {/* <List/> */}
    </div>
  );
}

export default App;
