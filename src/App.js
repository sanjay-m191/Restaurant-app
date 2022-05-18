import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import Login from './components/login';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/menu/index';
import SlotPicker from './components/slotPicker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<SlotPicker />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
