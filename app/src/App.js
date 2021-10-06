import './App.css';
import { Route, Switch } from 'react-router';
import {Home} from './Home'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="" component={Home}/>
        <Route exact path="/portfolio" />
        <Route path="/about" />
        <Route exact path="/blog" />
      </Switch>
    </main>
  );
}

export default App;
