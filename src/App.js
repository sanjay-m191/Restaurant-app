import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
// import Login from './components/login'; 
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/menu/index';
import SlotPicker from './components/slotPicker';
import Login from './components/LoginComp';
import Footer from './components/footer';
import CalendarInfo from './components/eventsCalender';
import EventsInfo from './components/eventInfo';


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
      <Route path="/calendar" element={<CalendarInfo />} />
      <Route path='/eventsInfo' element={<EventsInfo/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div> 
  );
}

export default App;
