import './App.css';
import Formulario from './components/Formulario';
import ListHosts from './components/ListHosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      

      <Switch>
        <Route path="/inicio">
          <Inicio></Inicio>
          <Formulario></Formulario>
        </Route>
        <Route exact path="/">
          <ListHosts></ListHosts>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
