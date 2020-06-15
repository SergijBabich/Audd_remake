import React from 'react'; 
import ar from './FoundSsuccessfully.module.css'

const FoundSsuccessfully = (props) => {
    return (
        <div className={ar.modal__box}  >
             <p>The song was successfully added to the history</p> 
        </div>
    )
}

export default FoundSsuccessfully;