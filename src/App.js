//import logo from './logo.svg';
//import './App.css';
import Person from './Components/Person';
import {Man} from './Components/Man';

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
      <Person name="Anil" age="29" />
      <Person name="Saini" age="31" />
      <Man />
    </div>
  );
}

export default App;
