import {Header} from './components/header';
import Main from './components/main';
import {Footer} from './components/footer';
import {checkUser, getInfo} from './services';

class AppComponent extends Component {
  state = {info: null, user: null, loading: true};

  componentDidMount() {
    checkUser()
      .then((data) => this.setState({user: data, loading: false}))
      .catch(() => this.setState({loading: false}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo().then((info) => this.setState({info}));
    }
  }

  onLogin = (user) => {
    this.setState({
      user
    });
  };

  render() {
    const {user, info, loading} = this.state;
    return (
      <>
        <Header user={user} info={info}/>
        <Main user={user} info={info} loading={loading} onLogin={this.onLogin}/>
        <Footer/>
      </>
    )
  }
}

export default AppComponent
