import {Component} from 'react';
import cx from 'classnames';
import styles from './index.sass';
import {Link} from 'routes';
import {inject, observer} from 'mobx-react';
import Sound from 'react-sound';
import {Router} from 'routes';
import RedPlayBtn from 'components/Modules/RedPlayBtn';
import Stats from 'components/Modules/Stats';
import Tags from 'components/Modules/Tags';

@inject('player')
@inject('artist')
@observer
class Album extends Component {
  render () {
    const {className, album, player, router} = this.props;
    
    return (
      <div>
        <div className={styles.top}>
          <a href={album.url} onClick={this.goArtist}>
            <img className={styles.image} src={album.imageSize('extralarge').url} alt={album.name} title={album.name} />
          </a>
          <div className={cx(styles.play, {[styles.play_active]: album.isPlaying})}> 
            <RedPlayBtn 
              className={styles.play__btn}
              isPlaying={album.isPlaying && player.onPlaying}
              play={album.play}
            />
          </div>
        </div>
        <a href={album.url} onClick={this.goArtist} className={styles.title}>{album.name}</a>
        <Stats className={styles.stats}>{album.stats.getStats}</Stats>
        <Tags className={styles.tags}>{album.getTopTags}</Tags>
      </div>
    )
  }

  goArtist = (e) => {
    e.preventDefault();

    const {mbid} = this.props.album;
    
    this.props.artist.goArtist(mbid);
  }
};

Album.displayName = 'Modules/Album';

export default Album;