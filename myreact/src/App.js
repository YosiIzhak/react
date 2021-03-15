import logo from './logo.svg';
import './App.css';

import Card from './components/class6.1/class6.1'
function App() {
  return (
  
   <div>
      <Card
        source={'https://picsum.photos/189' }
        title={"lorem"}
        description={"lore picsum"}
        share={"https://picsum.photos/"}
        explore={"https://unsplash.com/"}
      />
   </div>
  );
}

export default App;
