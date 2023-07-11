import './App.css';
import Routing from './Routes/Routing';
import Toasty from './components/Effect/Toasty';

function App() {
  return (
    <main className='App'>
      <Routing />
      <Toasty />
    </main>
  );
}

export default App;
