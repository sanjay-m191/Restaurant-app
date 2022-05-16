import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Login />
    </div>
  );
}

export default App;
