import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Scooby from "./scooby";

function About() {
    const [showFaves, setShowFaves] = useState(false);   
    const [showScoob, setShowScoob] = useState(false); 

    var ScoobyDoo = showScoob ? <Scooby /> : undefined;

    var faves = "Formative favorites include Buffy the Vampire Slayer, Jane Eyre, Mass Effect anad Jurassic Park.";  
    return <div className="text-content">
        <p>hey there! i am a lifelong coder with a self-taught background and an inclusivity first approach to development. my first lines of code weren't in a classroom, but rather on my first laptop as a teenager wanting to make fansites for my favorite <button autoFocus onClick={() => setShowFaves(true)}>media</button>. i've spent valuable time working in museums and customer service, but decided to pursue my passion for building communities through code by completing the grace hopper certificate program at fullstack academy. since then i have worked as a full stack developer, contributing to the development of web applications from front end to back for a number of clients. i am an advocate for clean, accessible code.</p>
    <p>when not juggling visual studio windows, i can usually be found adventuring with friends playing tabletop games, dabbling in crafts or reading on the beach. i'm proudly half-egyptian and fond of pop culture, art and aabria iyengar. all codes and content approved by my cat <button onClick={() => setShowScoob(true)}>scooby-doo</button>. </p>
    { showFaves ? 
    <p>
        <FontAwesomeIcon icon={faHeart} /> <i>{faves}</i>
        </p> : null }

    {ScoobyDoo}
    </div>
  }

  export default About;