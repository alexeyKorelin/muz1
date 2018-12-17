import {Component} from 'react';
import cx from 'classnames';
import styles from './index.sass';
import {inject, observer} from 'mobx-react';
import Albums from 'components/Modules/Albums';
import API from 'utils/api';
import {Link} from 'routes';
import H from 'components/Base/H';
import {Container} from 'components/Base/Grid';

class Index extends Component {
  render() {
    const {artists, albums} = this.props;
    
    return (
      <div className={styles.root}>
        <div className={styles.block}>
          <Container>
            <H tag='h2' align='left' size={3}>Top artists</H>
          </Container>
          <Albums className={styles.artists} albums={artists} />
        </div>
        <div className={styles.block}>
          <Container>
            <H tag='h2' align='left' size={3}>Other artists</H>
          </Container>
          <Albums className={styles.artists} albums={albums} />
        </div>
      </div>
    )
  }
}

Index.displayName = 'Screens/Index';

export default Index;
