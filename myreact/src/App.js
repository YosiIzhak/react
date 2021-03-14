import logo from './logo.svg';
import './App.css';
//import Interpolation from './components/2.2/2.2';
// import Sum from './components/2.2/2.2';
 import Length from './components/2.2/2.2';
function App() {
  return (
   
   <div className="App">
        {/* <Interpolation> </Interpolation> */}
        {/* <Sum></Sum> */}
        <Length></Length>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
