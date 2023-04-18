import './App.css';
import { GetSemana } from './components/GetSemana';
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';
import ModalC from './components/ModalC';
import ModalD from './components/ModalD';
import Reload24Horas from './components/Reload24Horas';
import Teste from './components/Teste';
import TesteBotoes from './components/TesteBotoes';
import TestePegarvalor from './components/TestePegarvalor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TesteBotoes />
        <ModalA/>
        <ModalB />
        <ModalC />
        <ModalD />        
        <Reload24Horas/>
      </header>
    </div>
  );
}

export default App;
