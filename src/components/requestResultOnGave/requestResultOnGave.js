import React from 'react';
import err from './requestResultOnGave.module.css';
import { useHistory } from "react-router-dom";



const RequestResultOnGave = (props) => {

    let history = useHistory();  
    let setModalRedirectToMain = () => {
        history.push("/main");
    }

    return (
        <div className={err.wrapper__container}>
             <div className={err.container}>
                    <div className={err.header__container} >
                        <h3>Unfortunately, we did not find anything, this may be due to: </h3>
                    </div>
                    <div className={err.container__list}>
                        <ul>
                            <li>Typing mistakes</li>
                            <li>A small number of words</li>
                            <li>Try downloading the file or try again</li>
                        </ul>
                    </div>
                    <div className={err.button_container}>
                        <button className={err.button} onClick={setModalRedirectToMain}>Go back </button>
                    </div>
             </div>
        </div>
       
    )
}


export default RequestResultOnGave;