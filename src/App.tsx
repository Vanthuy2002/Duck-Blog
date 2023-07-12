import './App.css';
import Routing from './Routes/Routing';
import Toasty from './components/Effect/Toasty';
import AuthProvider from './components/context/AuthContext';

function App() {
  return (
    <main className='App'>
      <AuthProvider>
        <Routing />
        <Toasty />
      </AuthProvider>
    </main>
  );
}

export default App;
