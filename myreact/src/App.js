import logo from './logo.svg';
import './App.css';
//import Interpolation from './components/2.2/2.2';
// import Sum from './components/2.2/2.2';
//  import Length from './components/2.2/2.2';
import Boxes from './components/boxes 3.1/3.1'
import Quiz from './components/Quiz 3.2/3.2';
function App() {
  return (
   
   <div className="App">
       
       <Quiz></Quiz> 
       {/* <Interpolation> </Interpolation> */}
        {/* <Sum></Sum> */}
        {/* <Length></Length> */}
        {/* <Boxes></Boxes> */}
      {/* <header className="App-header">
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
      </header> */}

    </div>
  );
}

export default App;
