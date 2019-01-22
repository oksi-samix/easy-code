import {Redirect, withRouter} from 'react-router-dom';
// import { withRouter} from 'react-router';
import {Header} from './components/header';
import Main from './components/main';
import {Footer} from './components/footer';
import {check, logout} from './store/user';
import {getInfo, cleanInfo} from './store/categories';
import {Pages} from './pages/Pages';
import {connect} from 'react-redux';


class AppComponent extends Component {
  state = {
    info: null,
    loading: true
  };

  componentDidMount() {
    /* checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false })); */
    this.props.dispatch(check());
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.user && this.props.user) {
      this.props.dispatch(getInfo())
    }
    if (prevProps.user && !this.props.user) {
      this.props.history.push('/');
      this.props.dispatch(cleanInfo())
    }
  }

  onLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const {user, info} = this.props;
    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
          history={history}
        />
        <Main>
          <Pages user={this.props.user} info={info}/>
        </Main>
      </>
    );
  }
}

const mapState = state => ({user: state.user, info: state.info});

export default withRouter(connect(mapState)(AppComponent));
