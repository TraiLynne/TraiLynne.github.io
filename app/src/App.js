import './App.css';
import { Route, Switch } from 'react-router';
import {Home} from './Home'
import About from './About/About';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" />
        <Route path="/about" component={About}/>
        <Route exact path="/blog" />
      </Switch>
    </main>
  );
}

export default App;
