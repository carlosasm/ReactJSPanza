import './App.css';
import Formulario from './components/Formulario';
import Inicio from './components/Inicio';
import LeftSide from './components/login/LeftSide';
import RigthSide from './components/login/RigthSide';
import {Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import UpdateHost from './components/host/UpdateHost';
import Menu from './components/Menu';
import Login from './components/Login';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/inicio">
          <Inicio></Inicio>
          <Formulario></Formulario>
        </Route>
        <Route exact path="/">{Login}</Route>
        <Route path="/update">
          <UpdateHost></UpdateHost>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
