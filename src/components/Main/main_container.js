import {setLyricsData} from '../../REDUX/music_Reducer.js';
import {connect} from   'react-redux';
import musicReducer from '../../REDUX/music_Reducer.js';
import {getMusicFromLyrics} from '../../REDUX/music_Reducer.js';
import {saveFile} from '../../REDUX/music_Reducer.js';
import Main from './main.js'
export const mapStateToProps = (state) => {
return {
  sound: state.sound.lyrics,
  music:state.sound.music,
  file: state.sound.file,
  musicFile: state.sound.musicFile,
  value: state.sound.value,
  }
}

const MainContainer = connect(mapStateToProps, {getMusicFromLyrics, saveFile})(Main);
export default MainContainer;
