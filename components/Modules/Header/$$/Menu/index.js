import cx from 'classnames';
import styles from './index.sass';
import {data} from './mock.js';
import {Link} from 'routes';

const Menu = ({className}) => (
  <ul className={cx(styles.root, className)}>
    {data.map((v, i) =>
      <li key={i} className={styles.li}>
        <Link route={v.route} prefetch>
          <a className={styles.a}>{v.title}</a>
        </Link>
      </li>
    )}
  </ul>
)

Menu.displayName = 'Modules/Header/Menu';

export default Menu;