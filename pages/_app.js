import App, {Container} from 'next/app';
import {initStore} from 'stores';
import {initState} from 'server/states';
import Settings from 'config';
import Application from 'components/Layouts/Application';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.initialState, props.env);
  }

  static async getInitialProps(props) {
    return initState({req: props.ctx.req, query: props.ctx.query});
  }

  render() {
    const {Component, pageProps, router} = this.props;

    return (
      <Container>
        <Application store={this.store}>
          <Component {...pageProps} />
        </Application>
      </Container>
    )
  }
}
