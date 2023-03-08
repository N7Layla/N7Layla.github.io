import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import artmood from '../images/artmood.PNG';

function Projects(props) {  
    return <div className="text-content">
      <div className="project-section">
        <img src={artmood} alt="Screenshot of ARTmood project" className="project-shot" />
        <span>
          <h2>ARTmood</h2> <FontAwesomeIcon icon={faCode} /> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
          <h3>react | redux</h3>
          originally a project i made during my time at the grace hopper program, ARTmood is a simple web app where the user can search for works of art based on their mood or by a particular color. relaunch of live site coming soon!
          </span>
      </div>
      </div>
  }

  export default Projects;