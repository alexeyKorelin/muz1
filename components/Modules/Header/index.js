import cx from 'classnames';
import styles from './index.sass';
import logo from 'public/images/logo.svg';
import * as S from './$$';
import {withRouter} from 'next/router';
import {Container, Row, Col} from 'components/Base/Grid';

const Header = ({router}) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <S.Logo className={styles.logo} isMain={router.route == '/'} />
      <Container>  
        <Row>
          <Col size={3}>
            <S.Search className={styles.search} />
          </Col>
          <Col className={styles.menuCol} size={4}>
            <S.Menu />
          </Col>
        </Row>
      </Container> 
      <S.Auth className={styles.auth} />
    </div>
  </header>
)

Header.displayName = 'Modules/Header';

export default withRouter(Header);