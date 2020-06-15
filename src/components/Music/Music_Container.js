
import MusicData from './MusicData'
import musicReducer from '../../REDUX/music_Reducer.js';
import {connect} from   'react-redux';


export const mapStateToProps = (state) => {
return {
    sound: state.sound.lyrics,
    music:state.sound.music,
  }
}

const MusicContainer = connect(mapStateToProps)(MusicData);
export default MusicContainer;
