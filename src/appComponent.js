import {Redirect, withRouter } from 'react-router-dom';
// import { withRouter} from 'react-router';
import {Header} from 'components/header';
import Main from 'components/main';
import {Footer} from './components/footer';
import {checkUser, getInfo} from './services';
import {Pages} from './pages/Pages';

class AppComponent extends Component {
  state = {
    info: null,
    user: null,
    loading: true
  };

  componentDidMount() {
    checkUser()
      .then((data) => this.setState({
        user: data,
        loading: false
      }))
      .catch(() => this.setState({loading: false}));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then((info) => this.setState({info}));
    }
  }

  onLogin = (user) => {
    this.setState({
      user
    });
  };

  onLogout = () => {
    this.setState({
      user: null
    });
  };

  render() {
    const {user, info, loading} = this.state;
    const ConnectedHeader = withRouter(({history}) =>
      <Header user={user} info={info} onLogout={this.onLogout} history={history}/>)
    return (
      <>
        <ConnectedHeader />
        <Main loading={loading}>
          <Pages user={user} info={info} onLogin={this.onLogin}/>
        </Main>
        <Footer/>
      </>
    );
  }
}

export default AppComponent;
