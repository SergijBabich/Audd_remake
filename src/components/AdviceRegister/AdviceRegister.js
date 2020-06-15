import React, {useRef} from 'react'; 
import adv from './AdviceRegister.module.css'

const AdviceRegister = (props) => {
  
    return (
        <div className={adv.modal__box}  >
             <p>I am a modal! </p>
             <p>Click anywhere to close me! you need registered </p>
      </div>
    )
}

export default AdviceRegister;