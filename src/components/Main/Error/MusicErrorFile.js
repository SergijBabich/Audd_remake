import React from 'react';
import err from './Error.module.css';
const MusicErrorFile = (props) => {
  return (
      <div className={err.container_errors}>
       <p className={err.error_notification}>Unfortunately, we did not find anything, this may be due to:</p>
       <ul className={err.error_variant}>
          <li>The downloaded file must be in mp3 format; </li>
          <li>Too big audio file. 10M or 25 seconds is maximum, we recommend to record no more than
           20 seconds (usually it takes less than one megabyte). If you need to recognize really big
          audio files, our Enterprise endpoint supports files that up to 24h long. Contact us;</li>
          <li>Try downloading a better file or try again;</li>
          <li>You can lead a sentence from a song. </li>
      </ul>
      </div>
  )
}

export default MusicErrorFile;
