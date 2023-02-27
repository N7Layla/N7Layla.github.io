import Scoob1 from '../images/IMG_2126.jpg';
import Scoob2 from '../images/scoobs.jpg';
import Scoob3 from '../images/scoobyicon.jpg';

function Scooby(props) {  
    return <div className="scooby-shrine">
        <img className="scoob1" src={Scoob1} alt="My cat Scooby wearing his little cowboy hat." />
        <img className="scoob2" src={Scoob3} alt="My cat Scooby striking a silly pose for the camera." />
        <img className="scoob3" src={Scoob2} alt="My cat Scooby chilling on the couch." />
        </div>
  }

  export default Scooby;