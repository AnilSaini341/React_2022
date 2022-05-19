//import logo from './logo.svg';
//import './App.css';
import Person from './Components/Person';
import {Man} from './Components/Man';
import Maps from './Components/Maps';
import Form from './Components/Form';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Man number="1" />
      <Person name="Anil" age="29" />
      <Man number="2" />
      <Person name="Saini" age="31" />
      <Man number="3" />
      <Maps />
      <Form />
    </div>
  );
}

export default App;
