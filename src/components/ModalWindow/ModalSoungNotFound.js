import React, {useRef} from 'react';
import m     from './modal.module.css'
import main from '../Main/main.module.css'
import { useHistory } from "react-router-dom";


const ModalSongNotFound = (props) => {
    let history = useHistory();
    
    const isClose  = useRef(false);
    let setModalRedirectToMain = () => {
        console.log(props)
        history.push("/main");
    }
    let closeModalWindow = (e) => {
        e.preventDefault();

        isClose.current.classList.add(m.modal__hide);
    }
    
    
    return (
            <> {props.isWindow &&  <>    
                 <div className={m.modal} ref={isClose} onClick={closeModalWindow} >
                                          <div className={m.modal__box}>
                                                <p>We are very sorry that you did not satisfy your request, try to enter more words from the song </p>
                                    <button className={main.button} onClick={setModalRedirectToMain}>Main menu</button>
           </div>
        </div>
         </>}
          

            </>
    )
}

export default ModalSongNotFound;