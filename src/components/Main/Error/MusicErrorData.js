import React from 'react';
import err from './ErrorData.module.css';
const MusicErrorData = (props) => {
  return (
      <div className={err.container_errors}>
       <p className={err.error_notification}>Unfortunately, we did not find anything, this may be due to:</p>
       <ul className={err.error_variant}>
          <li>Typing mistakes </li>
          <li>A small number of words</li>
          <li>Try downloading the file or try again;</li>
      </ul>
      </div>
  )
}

export default MusicErrorData;
