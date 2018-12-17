import cx from 'classnames';
import styles from './index.sass';

const Stats = ({className, children, size}) => (
  <div className={cx(styles.root, styles[`root_${size || 'sm'}`], className)}>{children}</div>
)

Stats.displayName = 'Modules/Stats';

export default Stats;