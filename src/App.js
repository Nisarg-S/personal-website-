import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume'

import "antd/dist/antd.css";
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
