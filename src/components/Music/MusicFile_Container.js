
import MusicDataFile from './MusicDataFile'
import musicReducer from '../../REDUX/music_Reducer.js';
import {connect} from   'react-redux';


export const mapStateToProps = (state) => {
return {
    music:state.sound.musicFile,
  }
}

const MusicFileContainer = connect(mapStateToProps)(MusicDataFile);
export default MusicFileContainer;
