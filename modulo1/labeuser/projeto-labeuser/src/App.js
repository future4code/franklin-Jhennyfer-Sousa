import logo from './logo.svg';
import './App.css';
import {Router} from './Routes/Router';
import { CadastroUser } from './Pages/CadastroUser/CadastroUser';

const App = () => {
  return (
    <div className="App">
      <Router/>
      {/* <CadastroUser/> */}
    </div>
  );
}

export default App;
