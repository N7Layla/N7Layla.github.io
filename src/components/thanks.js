import { useRef, useEffect } from 'react';

function Thanks(props) {  
    const linkReference = useRef(null);

    useEffect(() => {
        linkReference.current.focus();
    }, []);

    return <div className="text-content">
        <ul>
            <li>Site built using create-react-app.</li>
            <li>Picrew portrait by <a ref={linkReference} target="_blank" rel="noreferrer" href="https://twitter.com/itsjxds">itsjxds</a>.</li>
            <li>Wavy underline svg from <a target="_blank" rel="noreferrer" href="https://ewebdesign.com/">ewebdesign</a>.</li>
            <li>Hand drawn circle from <a target="_blank" rel="noreferrer" href="https://codepen.io/victorknust/">Victor Knust on Codepen</a>.</li>
            </ul>  
        </div>
  }

  export default Thanks;