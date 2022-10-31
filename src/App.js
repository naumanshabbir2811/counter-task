import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Multiplier from './components/Multiplier';
import Divider from './components/Divider';
import Subtractor from './components/Subtractor';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Multiplier/>
     <Divider/>
     <Subtractor/>
    </div>
  );
}

export default App;
