import React, { useState } from 'react';
import { BrowserRouter, Routes, Route,  Outlet, NavLink } from 'react-router-dom';
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import About from "./components/about";
import Projects from "./components/projects";
import Contact from './components/contact';
import Thanks from './components/thanks';
import Blog from './components/blog';
import desk from "./images/desk_commission-2_1.gif";
import deskStill from './images/desk_commission_illustration.png';

function Home(props) {
  return <div className="text-content">hello and welcome! i'm a full stack developer, accessibility advocate and ux enthusiast.</div>
}

function App() {

  let activeStyle = "mark";
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const [animateImg, setAnimateImg] = useState(true); 

  const areaListener = new AbortController();

  function animate(ev) {
    ev.target.style.animationPlayState = 'running';
  }

  function unanimate(ev) {
    ev.target.style.animationPlayState = 'paused';
  }

  var bannerImage = animateImg ? desk : deskStill;
  console.log("->", animateImg);
  const noAnimation = () => {   
    const animations = document.querySelectorAll('a');
    console.log("???", animateImg);
    animations.forEach(animation => {
            if (animateImg === false) {
              animation.addEventListener("mouseover", animate, { signal: areaListener.signal });
              animation.addEventListener("mouseleave", unanimate, { signal: areaListener.signal });
              setAnimateImg(true);
            } else {
              animation.style.animationPlayState = 'paused';
              animation.addEventListener("mouseover", unanimate);
              areaListener.abort();              
              setAnimateImg(false);
            }           
        })
      
  }
  
  return (
<BrowserRouter>  
    <main data-theme={theme}>
      <div className="background">
        </div>
        <div className="container">
        <header>
          <h1>laylawrote</h1>
          <div>
          {theme === 'light'
        ? <button onClick={switchTheme}><FontAwesomeIcon icon={faMoon} /> Dark Mode</button>
        : <button onClick={switchTheme}><FontAwesomeIcon icon={faSun} /> Light Mode</button>
      }
      {animateImg ? <button onClick={noAnimation}><FontAwesomeIcon icon={faPause} /> Pause Animation</button>  : <button onClick={noAnimation}><FontAwesomeIcon icon={faPlay} /> Play Animation</button> }
      </div>
          </header>
          <img src={bannerImage} alt="Laylawrote Desk Scene Illustration" className="desk" />
        <section className="content-box">
         
          
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
          to="blog"
          className={({ isActive }) =>
          isActive ? activeStyle : ""}>
            blog</NavLink>
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


        
        <Outlet />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes></section> 
    </div>
    <footer>
      <NavLink to="thanks">site thanks</NavLink> 
      <div className="accounts">
          <a href="https://github.com/N7Layla" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithubSquare} /></a>
          <a href="https://www.linkedin.com/in/laylahedges/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
          <a href="https://twitter.com/laylawrote" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faTwitterSquare} /></a>
        </div> © laylawrote 2023
      </footer>
    </main>

    </BrowserRouter>

  );
}

export default App;

