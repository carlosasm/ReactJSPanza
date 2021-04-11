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


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/inicio">
          <Inicio></Inicio>
          <Formulario></Formulario>
        </Route>
        <Route exact path="/">
          <Row className="landing">
            <Col><LeftSide></LeftSide></Col>
            <Col><RigthSide></RigthSide></Col>
          </Row>
        </Route>
        <Route path="/update">
          <UpdateHost></UpdateHost>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
