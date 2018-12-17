import {Component} from 'react';
import Head from 'next/head';
import {Provider} from 'mobx-react';
import {withRouter} from 'next/router';
import cx from 'classnames';
import styles from './index.sass';
import 'styles/main.sass';
import Header from 'components/Modules/Header';
import Player from 'components/Modules/Player';

class Application extends Component {
  render () {
    const {children, router, store} = this.props;
    
    return (
      <Provider {...store}>
        <div className={styles.root}>
          <Head>
            <title>RBL</title>
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
          </Head>
          <Header />
          <main className={styles.main}>{children}</main>
          <Player />
        </div>
      </Provider>
    )
  }
}

export default withRouter(Application);
