import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet.js';
import Add from './component/Add.js';
import Sub from './component/Sub.js';
import Button from './component/Button.js';
import Greets from './component/Greets.js';
import Counter from './component/Counter.js';
function App() {
  return (
    <div className="App">
     <Greet/>
     <Add></Add>
     <Sub></Sub>
     <Button></Button>
     <Greets></Greets>
     <Counter></Counter>
    </div>
  );
}

export default App;
