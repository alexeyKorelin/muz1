import cx from 'classnames';
import styles from './index.sass';
import logo from 'public/images/logo.svg';
import {Link} from 'routes';

const Logo = ({className, isMain}) => {
  if (isMain) { 
    return (
      <img className={cx(styles.root, className)} src={logo} alt='' title='' />
    );
  } else {
    return (
      <Link route='/' prefetch>
        <a className={cx(styles.root, className)}>
          <img src={logo} alt='' title='' />
        </a>
      </Link>
    )
  }
}

Logo.displayName = 'Modules/Header/Logo';

export default Logo;