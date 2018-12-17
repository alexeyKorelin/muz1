import cx from 'classnames';
import styles from './index.sass';

const Tags = ({className, children, size}) => (
  <div className={cx(styles.root, styles[`root_${size || 'sm'}`], className)}>{children}</div>
)

Tags.displayName = 'Modules/Tags';

export default Tags;