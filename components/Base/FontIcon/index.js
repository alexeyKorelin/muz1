import cx from 'classnames';
import styles from './index.sass';

const FontIcon = ({i, className, ...props}) =>
  <i className={cx(styles[`icon-${i}`], className)} {...props} />

FontIcon.displayName = 'Base/FontIcon';

export default FontIcon;