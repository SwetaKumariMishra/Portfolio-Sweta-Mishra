import './App.scss';
import {Routes, Route} from 'react-router-dom';
import About from './containers/about';
import Home from './containers/home';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
    <Navbar />

     {/* main-page-content */}
      <div className='App__main-page-content'>
      <Routes>
      <Route index path='/' element={<Home/>} />
      <Route index path='/Portfolio-Sweta-Mishra' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/resume' element={<Resume/>} />
    </Routes>
    </div>
    
    </div>
  );
}

export default App;
