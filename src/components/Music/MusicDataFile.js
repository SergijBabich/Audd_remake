 import React from 'react';
import PreLoader from '../preloader/preloader.js';
import m from './MusicData.module.css';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from "react-h5-audio-player";
import RequestResultOnGave from '../requestResultOnGave/requestResultOnGave'
import FoundSsuccessfully from '../FoundSsuccessfully/FoundSsuccessfully'
import AdviceRegister from '../AdviceRegister/AdviceRegister'

class MusicDataFile extends  React.Component   {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  state = {
      value:0,
      isLoading:false,
      isFoundSong: 0
  }
  showLose = () => {
      this.setState({  isBurning: 0 });
}
  showWin =() => {
    this.setState({isBurning: 1});
  }

  componentDidMount() {
    setTimeout(
      function() {
          this.setState({isLoading: true});
      }
      .bind(this),
      1400
  );
  }
  showSsuccessfullModalWindow =(value) => {
    console.log(this.props)
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
     3000
 );
 }
}

 render() {


  return (
      <>  {this.state.isFoundSong === 2 &&  <FoundSsuccessfully value = {this.state.IsNotFound}  /> }
         {this.state.isFoundSong == 1 && <AdviceRegister />  }
        {this.state.isLoading? <RenderMusicData music = {this.props.music} showSsuccessfullModalWindow={this.showSsuccessfullModalWindow} showLose={this.showLose} /> : <PreLoader />}
      </>
  )
 }
}




const RenderMusicData = (props) => {

 let  callShowWin = () => {
    props.showSsuccessfullModalWindow();
  }

  return (
    <> {!props.music ? <RequestResultOnGave /> : 
    <div className={m.container_wrapper}>
      <div className={m.container}>
      <div className={m.media}>
      <div className={m.media_img}>
        <img src={props.music.deezer.album.cover_medium} alt="Song image" />
      </div>
        <div className={m.media_container}>
        <div className={m.media_item1}>
            1 Song, 3 Minutes
        </div>

            <div className={m.media_item2}>
                <a href={props.music.deezer.preview}>
                    Preview <i className={m.fas}></i>
                </a>
            </div>
            <div className={m.container__link}>
                <a href={props.music.song_link}>Listen in lis.tn<i className={m.fas}></i></a>
            </div>
            
        </div>
    </div>
    <div class={m.content}>
     <div className={m.container__info_explain} >
        <h1>{props.music.title} - Single</h1>
        <h3>{props.music.artist} </h3>
        <small>{props.music.label}</small><br/>
     </div>
        <div class={m.contant_song}>
        <AudioPlayer className={m.play}
            src={props.music.deezer.preview}
            backgroundColor = "black"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
        </div>
        <div class={m.contant_release}>
            <span><b>Released:</b></span>{props.music.release_date}<br />
            &copy; {props.music.label} <br></br>
            <div>
              <span id="span">Also Available in iTunes</span>
            <div className={m.button_container}>
              <button  className={m.button} onClick={callShowWin} >Yes </button>
              <button  className={m.button} onClick={props.showLose} >No </button>
            </div>
            </div>

        </div>
    </div>
 </div>   
</div>}
</>
  )
}


export default MusicDataFile;



