//import logo from './logo.svg';
import * as React from "react";
import './App.css';

import Spinner from './components/spinner9.1/spinner9.1'
function App() {
  const [counter, setCounter] = React.useState(5);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
   
   <div>
      <Spinner  />
      <div><h1>Countdown: {counter}</h1></div>
   </div>
  );
}

export default App;
