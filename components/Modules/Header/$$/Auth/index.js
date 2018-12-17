import cx from 'classnames';
import styles from './index.sass';
import {Link} from 'routes';

const Auth = ({className}) => (
  <div className={cx(styles.root, className)}>
    <button className={styles.a}>Log In</button>
    <span className={styles.or}>or</span>
    <Link route='/'>
      <a className={styles.a}>Register</a>
    </Link>
  </div>
)

Auth.displayName = 'Modules/Header/Auth';

export default Auth;