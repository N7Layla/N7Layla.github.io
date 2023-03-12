import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import artmood from '../images/artmood.PNG';
import tvtracker from '../images/tvtracker.PNG';

function Projects(props) {  
    return <div className="text-content">
      <div className="project-section">
        <img src={artmood} alt="Screenshot of ARTmood project" className="project-shot" />
        <span>
          <h2>ARTmood</h2> <a target="_blank" rel="noreferrer" href="https://github.com/N7Layla/artmood"><FontAwesomeIcon icon={faCode} /></a> <a target="_blank" rel="noreferrer" href="https://laylawrote.com/artmood/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a> 
          <h3>react | redux | rest api</h3>
          originally a project i made during my time at the grace hopper program, ARTmood is a simple web app where the user can search for works of art based on their mood or by a particular color. utilizes the <a target="_blank" rel="noreferrer" href="https://harvardartmuseums.org/collections/api">harvard art museums api</a>. relaunch of live site coming soon, with some additions!
          </span>
      </div>
      <div className="project-section">
      <img src={tvtracker} alt="Screenshot of TVTracker project" className="project-shot" />
        <span>
          <h2>tv tracker</h2> <a target="_blank" rel="noreferrer" href="https://github.com/N7Layla/tv-tracker"><FontAwesomeIcon icon={faCode} /></a> <a target="_blank" rel="noreferrer" href="https://laylawrote.com/tv-tracker/tv.html"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          <h3>javascript | html | css | rest api</h3>
          i admittedly watch a <i>lot</i> of tv. i also happen to love lists, so i decided to take inspiration from one of my favorite media listing sites letterboxd and put together a tv version for myself. i mostly stuck with vanilla javascript for it, wanting to try out some drag and drop logic. it uses localstorage to persist data from the <a target="_blank" rel="noreferrer" href="https://www.tvmaze.com/api">tvmaze api</a>.
          </span>
      </div>
      <center>more projects in the works soon!</center>
      </div>
  }

  export default Projects;