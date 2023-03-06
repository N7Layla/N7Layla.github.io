import React from 'react';
import { BrowserRouter, Routes, Route,  Outlet, NavLink } from 'react-router-dom';
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import About from "./components/about";
import Projects from "./components/projects";
import Experience  from './components/experience';
import Contact from './components/contact';
import Thanks from './components/thanks';
import portrait from "./images/portrait1.png";

function Home(props) {
  return <div className="text-content">full stack developer | accessibility advocate | ux enthusiast</div>
}

function App() {

  let activeStyle = "mark";
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // const noAnimation = () => {
    
  // }
  
  return (
<BrowserRouter>  
    <main data-theme={theme}>
      <div className="background">
        </div>
        <div className="container">
        <aside>
        <img src={portrait} className="portrait" alt="Portrait illustration" />
        <div className="accounts">
          <a href="https://github.com/N7Layla" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithubSquare} /></a>
          <a href="https://www.linkedin.com/in/laylahedges/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
          <a href="https://twitter.com/laylawrote" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faTwitterSquare} /></a>
        </div>
        </aside>
        <section className="content-box">
          <header>
          <h1>laylawrote</h1>
          <div>
          {theme === 'light'
        ? <button onClick={switchTheme}><FontAwesomeIcon icon={faMoon} /> Dark Mode</button>
        : <button onClick={switchTheme}><FontAwesomeIcon icon={faSun} /> Light Mode</button>
      }
      {/* <button onClick={noAnimation}><FontAwesomeIcon icon={faX} /> No Animation</button> 
      <button><FontAwesomeIcon icon={faFont} /> Plain Fonts</button> */}
      </div>
          </header>
          
        <nav>
          <NavLink 
          to="about"
          className={({ isActive }) =>
              isActive ? activeStyle : undefined}>                
                about</NavLink> 
          <NavLink 
          to="experience"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              {/* <img className="sparkles" src={sparkle} /> */}
              experience</NavLink> 
          <NavLink 
          to="projects"
          className={({ isActive }) =>
          isActive ? activeStyle : undefined}>
            {/* <img className="sparkles" src={sparkle} /> */}
            projects</NavLink>
          <NavLink 
          to="contact"
          className={({ isActive }) =>
          isActive ? activeStyle : undefined}>
            contact</NavLink> 
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive ? activeStyle : undefined}>
            home</NavLink></nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
      <footer>
      <NavLink to="thanks">site thanks</NavLink> | © laylawrote 2023
      </footer>
        </section> 
        <Outlet />
    </div>
    </main>
    </BrowserRouter>

  );
}

export default App;

