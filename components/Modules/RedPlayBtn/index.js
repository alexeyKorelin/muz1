import {Component} from 'react';
import {inject, observer} from 'mobx-react';
import cx from 'classnames';
import styles from './index.sass';
import playIcon from 'public/images/player/play.svg';
import pauseIcon from 'public/images/player/pause.svg';

@observer
class RedPlayBtn extends Component {
  render () {
    const {className, isPlaying, play} = this.props;
    
    return (
      <button 
        className={cx(styles.root, className)} 
        onClick={play} 
        style={{backgroundImage: `url(${isPlaying ? pauseIcon : playIcon})`}} 
      />
    )
  }
};

RedPlayBtn.displayName = 'Modules/RedPlayBtn';

export default RedPlayBtn;