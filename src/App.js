import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import HatsPage from './pages/hatspage/hatspage';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </Switch>
  </div>
);

export default App;
