import { connect } from 'react-redux'
import SongEditorView from './SongEditorView'

const mapStateToProps = (state) => {
    const { fx, songIsPlaying, songName, songRepeat, songState } = state

    return {
        fxStatus: fx.status,
        songIsPlaying,
        songName,
        songRepeat,
        songState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFxEditor (channel) {
            dispatch({
                type: "FX_SET_VIEW",
                fxType: 'channel',
                id: channel
            })
        },
        hideFxEditor () {
            dispatch({
                type: "FX_HIDE_VIEW"
            })
        },
        toggleSongRepeat (repeat) {
            dispatch({
                type: "TOGGLE_SONG_REPEAT",
                repeat: {
                    repeat: document.getElementById('song-loop').checked,
                    ch0: document.getElementById('channel-loop-input-ch0').value,
                    ch1: document.getElementById('channel-loop-input-ch1').value,
                    ch2: document.getElementById('channel-loop-input-ch2').value,
                    ch3: document.getElementById('channel-loop-input-ch3').value
                }
            })
        },
        onSongNameChange (e) {
            dispatch({
                type: "SET_SONG_NAME",
                songName: e.target.value
            })
        }
    }
}

const SongEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongEditorView)

export default SongEditor
