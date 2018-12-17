import {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Application from 'components/Layouts/Application';
import Index from 'components/Screens/Index';

@inject('artists')
@inject('albums')
@observer
class IndexPage extends Component {
  componentDidMount() {
    const {artists, albums} = this.props;
    
    if (!artists.fetched) artists.fetch();
    if (!albums.fetched) albums.fetch();
  }

  render () { 
    return (
      <Index 
        artists={this.props.artists.items} 
        albums={this.props.albums.items} 
      />
    )
  }
}

IndexPage.displayName = 'Pages/Index';

export default IndexPage;
