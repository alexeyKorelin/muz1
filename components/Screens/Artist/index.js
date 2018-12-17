import {Component} from 'react';
import cx from 'classnames';
import {inject, observer} from 'mobx-react';
import styles from './index.sass';
import API from 'utils/api';
import {Link} from 'routes';
import {Container, Row, Col} from 'components/Base/Grid';
import H from 'components/Base/H';
import Stats from 'components/Modules/Stats';
import Tags from 'components/Modules/Tags';
import RedPlayBtn from 'components/Modules/RedPlayBtn';
import playIcon from 'public/images/player/play-sm.svg';
import pauseIcon from 'public/images/player/pause-sm.svg';

@observer
class Artist extends Component {
  render() {
    const {artist, player} = this.props;
    
    if (!artist) return null;
    
    return (
      <Container className={styles.root}>
        <Row>
          <Col size={6}>
            <Row>
              <Col size={5}>
                <img className={styles.image} src={artist.imageSize('extralarge').url} title={artist.name} alt={artist.name} />
              </Col>
              <Col size={5}>
                <H className={styles.title} tag='h1' align='left' size={1}>{artist.name}</H>
                <Stats className={styles.stats} size='lg'>{artist.stats.getStats}</Stats>
                <Tags className={styles.tags} size='lg'>{artist.getTopTags}</Tags>
                <RedPlayBtn 
                  className={styles.play} 
                  isPlaying={artist.isPlaying && player.onPlaying} 
                  play={artist.play}
                />
              </Col>
            </Row>
            <Row>
              <Col size={5}>
                <p 
                  className={styles.description} 
                  dangerouslySetInnerHTML={{ __html: artist.description.replace(/(\r\n|\n|\r)/gm, '<br />')}} 
                />
              </Col>
            </Row>
          </Col>
          <Col size={4}>
            <H tag='h2' align='left' size={3}>Tracklist</H>
            {artist.tracks.length > 0 &&
              <ul className={styles.tracks}>
                {artist.tracks.map((v, i) => (
                  <li className={styles.tracks__li} key={`${artist.mbid}${v.name}`}>
                    <div className={styles.tracks__controls}>
                      <span className={styles.tracks__number}>{i + 1}</span>
                      <button 
                        className={cx(styles.tracks__play, {[styles.tracks__play_active]: v.isPlaying})} 
                        onClick={v.toggle} 
                        style={{backgroundImage: `url(${(v.isPlaying && player.onPlaying) ? pauseIcon : playIcon}`}}  
                      />
                    </div>
                    <div className={styles.tracks__title} title={v.name}>{v.name}</div>
                    <div className={styles.tracks__artist} title={artist.name}>{artist.name}</div>
                  </li>  
                ))}
              </ul>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

Artist.displayName = 'Screens/Artist';

export default Artist;
