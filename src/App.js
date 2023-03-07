import React from 'react';
import { BrowserRouter, Routes, Route,  Outlet, NavLink } from 'react-router-dom';
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import About from "./components/about";
import Projects from "./components/projects";
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

  const noAnimation = () => {   
    const animations = document.querySelectorAll('a');
    animations.forEach(animation => {
            animation.style.animationPlayState = 'paused';
        })
  }
  
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
       <button onClick={noAnimation}><FontAwesomeIcon icon={faX} /> Pause Animation</button> 
      {/*<button><FontAwesomeIcon icon={faFont} /> Plain Fonts</button> */}
      </div>
          </header>
          
        <nav>
          <NavLink 
          to="about"
          className={({ isActive }) =>
              isActive ? activeStyle : ""}>                
                about</NavLink> 
          <NavLink 
          to="projects"
          className={({ isActive }) =>
          isActive ? activeStyle : ""}>
            projects</NavLink>
          <NavLink 
          to="contact"
          className={({ isActive }) =>
          isActive ? activeStyle : ""}>
            contact</NavLink> 
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive ? activeStyle : ""}>
            home</NavLink></nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
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

