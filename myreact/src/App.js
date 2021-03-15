import logo from './logo.svg';
import './App.css';

 //import Button from './components/buttons 4.1/4.1'
import Card from './components/Cards4.2/card';

function App() {
  return (
  //  <div>
  //   <Button weight={700}>important</Button>
  //   <Button weight={300}>noImportant</Button>
  //   </div>
   <div className="App">
      <Card
      source={'https://picsum.photos/200'}
        title={'myPic'}
      description={'pic1'}
        share={'https://picsum.photos/200'}
          explore={'abcd'}
          />
  <Card
      source={'https://picsum.photos/100'}
        title={'secPic'}
      description={'pic2'}
        share={'https://picsum.photos/100'}
          explore={'abcd'}
          />
           <Card
      source={'https://picsum.photos/120'}
        title={'morePic'}
      description={'pic3'}
        share={'https://picsum.photos/120'}
          explore={'abcd'}
          />
    </div>
  );
}

export default App;
