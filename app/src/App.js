import './App.css';
import { Route, Switch } from 'react-router';
import {Home} from './Home'
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
        <Route exact path="/blog" />
      </Switch>
    </main>
  );
}

export default App;
