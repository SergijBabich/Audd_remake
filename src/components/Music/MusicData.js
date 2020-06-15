import React from 'react';
import PreLoader from '../preloader/preloader.js';
import m from '../Main/main.module.css';
import module from './MusicData.module.css'
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player';
import MusicErrorData from "../Main/Error/MusicErrorData.js";
import externalLink from '../../img/externalLink.png';
import AudioPlayer from "react-h5-audio-player";
import ModalSongNotFound from '../ModalWindow/ModalSoungNotFound'
import RequestResultOnGave from '../requestResultOnGave/requestResultOnGave'
import FoundSsuccessfully from '../FoundSsuccessfully/FoundSsuccessfully'
import AdviceRegister from '../AdviceRegister/AdviceRegister';


class MusicData extends  React.Component   {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.thisIs= 0

  }
  state = {
      value:0,
      IsNotFound:false,
      isLoading:false,
      isFoundSong: 0
  }
  /*JSON.parse(this.props.music[this.state.value].media)[0].provider */
  showOtherComponent = () => {
  if (this.props.music !== undefined) {
    if (this.state.value < this.props.music.length-1 ) {
      this.setState({
        value: this.state.value + 1,
        IsNotFound: false
      })
      }
    else {
      this.setState({
        value: 0,
        IsNotFound: true
      })
    }
  }
  console.log(this.state.IsNotFound)
}
// показать окнок с успешнім нахождением 
  showSsuccessfullModalWindow =(value) => {
     if(!this.props.music) {
      this.setState({isFoundSong: 1});
    setTimeout(
      function() {
          this.setState({isFoundSong: 0});
      }
      .bind(this),
      3000
  );
  } else {
    console.log(value)
    this.setState({isFoundSong: 2});
    setTimeout(
      function() {
          this.setState({isFoundSong: 0});
      }
      .bind(this),
      30000
  );
  }
}

  /* фейковый загрузочный экран  */
  componentDidMount() {
    setTimeout(
      function() {
          this.setState({isLoading: true});
      }
      .bind(this),
      1400
  );
  }


 render() {
  return (
    <>        {this.state.isFoundSong === 2 &&  <FoundSsuccessfully value = {this.state.IsNotFound}  /> }
              {this.state.isFoundSong == 1 && <AdviceRegister />  }
              {this.state.IsNotFound && <  ModalSongNotFound  isWindow = {this.state.IsNotFound} /> }
              {this.state.isLoading ? <MusicDataComponent  value={this.state.value} showOtherComponent={this.showOtherComponent} showSsuccessfullModalWindow={this.showSsuccessfullModalWindow}  music={this.props.music} error={this.error} /> : <PreLoader /> } 
  </>

  )
 }
}


class MusicDataComponent extends  React.Component   {

  constructor(props) {
    super(props);
    console.log(this.props)

  }
  callShowWin = () => {
    this.props.showSsuccessfullModalWindow(this.props.music[this.props.value].title);
  }
 render() {
   return (
<> 
                {this.props.music.length ===0 ? <RequestResultOnGave /> :<div className={module.music_data_container}>
          <div className={module.music__border}>
            <div className={m.music_data_container_data}>
              <div >
                <p className={module.music_data_container__p}>Title - { this.props.music[this.props.value].title || this.error } </p>
                <p className={module.music_data_container__p}>Title with featured - { this.props.music[this.props.value].title_with_featured  || this.error  }</p>
                <p className={module.music_data_container__p}>Executor - { this.props.music[this.props.value].artist  || this.error  }</p>
             </div>
             <div>  
                <div className={m.show_link} >
                 {JSON.parse(this.props.music[this.props.value].media)[0] === undefined? <div>sorry</div>:  <a  className={module.music_data_container__p} href={JSON.parse(this.props.music[this.props.value].media)[0].url}> 
                    Listen to the other source <i className={m.fas}></i>
                  </a>}
                <img src={externalLink} alt="Song link" />
              </div> 

          </div>
         </div>
         <div className={m.music_data_container_preview}>
        
            <div className={module.find_error} > {JSON.parse(this.props.music[this.props.value].media)[0] === undefined ||
                                              JSON.parse(this.props.music[this.props.value].media)[0].provider === "apple_music" || 
                                             JSON.parse(this.props.music[this.props.value].media)[0].provider === 'spotify' ?
                                                                                                     <div><p>Sorry, but we did not find an entry to listen to this song.You can go to the distributor’s website</p></div> : 
                                                                                    <ReactPlayer   url={JSON.parse(this.props.music[this.props.value].media)[0].url} playing />}</div>
        <div className={module.music_data_container_preview_button}>
            <button  className={module.button} onClick={this.callShowWin} >that's it!</button>
            <button  className={module.button} onClick={this.props.showOtherComponent} >Search more</button>
        </div>
      </div>
     </div>
    </div>}
             </>
   )
 }
}

export default MusicData;
