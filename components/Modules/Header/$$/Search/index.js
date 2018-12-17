import cx from 'classnames';
import styles from './index.sass';
import search from 'public/images/search.svg';

const Search = ({className}) => (
  <form className={cx(styles.root, className)} action='.' onSubmit={() => console.log('search')}>
    <button className={styles.btn}>
      <img className={styles.icon} src={search} />
    </button>
    <input className={styles.input} type='search' placeholder='SEARCH' />
  </form>
)

Search.displayName = 'Modules/Header/Search';

export default Search;