import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {  
    return <div className="text-content">
      <div className="project-section">
        <img src=" " alt="" className="" />
        <span>
          <h2>ARTmood</h2> <FontAwesomeIcon icon={faCode} /> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
          <h3>react | redux</h3>
          originally a project i made during my time at the grace hopper program, ARTmood is a simple web app where the user can search for works of art based on their mood or by a particular color. 
          </span>
      </div>
      </div>
  }

  export default Projects;