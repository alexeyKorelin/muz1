import {Component} from 'react';
import cx from 'classnames';
import Settings from 'config';
import {inject, observer} from 'mobx-react';
import styles from './index.sass';
import Sound from 'react-sound';
import Toggle from 'components/Base/Toggle';
import previous from 'public/images/player/previous.svg';
import pauseIcon from 'public/images/player/pause.svg';
import playIcon from 'public/images/player/play.svg';
import next from 'public/images/player/next.svg';

@inject('player')
@observer
class Player extends Component {
  render() {
    const {player} = this.props;
    
    if (!player.track) return null;
  
    return (
      <>
        <Sound
          url={`${Settings.tracks_folder}${player.track.url}`}
          playStatus={player.playStatus}
        />
        <Toggle>
          <div className={styles.root}>
            <div className={styles.controls}>
              <button className={styles.controls__btn}>
                <img src={previous} />
              </button>
              <button 
                className={styles.controls__btn} 
                onClick={player.onPlaying ? player.pause : player.play} 
                style={{backgroundImage: `url(${player.onPlaying ? pauseIcon : playIcon}`}}
              />
              <button className={styles.controls__btn}>
                <img src={next} />
              </button>
            </div>
            <div className={styles.info}>
              <div className={styles.title}>{player.track.name}</div>
              <div className={styles.artist}>{player.artist.name}</div>
            </div>
          </div>
        </Toggle>
      </>
    )
  }
}

Player.displayName = 'Modules/Player';

export default Player;