import {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'next/router';
import Application from 'components/Layouts/Application';
import Artist from 'components/Screens/Artist';

@inject('artist')
@inject('player')
@observer
class ArtistPage extends Component {
  componentDidMount() {
    const {artist, router} = this.props;
    const {asPath} = router;
    const paths = asPath.split('/');
    
    if (!artist.current || artist.current && artist.current.mbid != paths[1]) this.fetchData(router);
  }

  componentWillReceiveProps(nextProps) {
    const {asPath} = nextProps.router;
    if (asPath != this.props.router.asPath)
      this.fetchData(nextProps.router);
  }

  render () { 
    return (
      <Artist artist={this.props.artist.current} player={this.props.player} />
    )
  }

  fetchData = (router) => {
    const {artist} = this.props;
    const {asPath} = router;
    const paths = asPath.split('/');
    
    artist.fetch(paths[1]);
  }
}

ArtistPage.displayName = 'Pages/Artist';

export default withRouter(ArtistPage);
