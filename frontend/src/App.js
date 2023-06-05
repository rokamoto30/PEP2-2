import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/Auth"
import SignUp from './components/SignUp';
import Schedule from './components/Schedule';
import Subjects from './components/Subjects';
import Tutor from './components/Tutor';
import StudentInfo from './components/StudentInfo';
import Footer from './components/Footer';
import Courses from './components/Courses';

function App() {

  const location = useLocation(); // Created to hide headers
  const showHeader = location.pathname !== '/auth'; // hide the header from the auth
  const showSignup = location.pathname !== '/signup'; // to hide the header from the signup
  const showHome = location.pathname !== '/';
  return (
    <div className='container'>

   {showHeader && showSignup &&  showHome && <Header/>}
 
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/subjects' element={<Subjects/>}/>
        <Route path='/tutor' element={<Tutor/>}/>
        <Route path='/student' element={<StudentInfo/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;