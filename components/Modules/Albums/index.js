import cx from 'classnames';
import styles from './index.sass';
import {inject, observer} from 'mobx-react';
import {Link} from 'routes';
import {Container, Row, Col} from 'components/Base/Grid';
import Album from 'components/Modules/Album';

const Albums = ({className, albums}) => (
  <Container className={cx(styles.root, className)}>
    <Row>
      {albums.map(v => (
        <Col key={v.mbid} className={styles.col} size={2}>
          <Album  album={v} />
        </Col>
      ))}
    </Row>
  </Container>
);

Albums.displayName = 'Modules/Albums';

export default observer(Albums);