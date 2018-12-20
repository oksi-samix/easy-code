import {checkUser} from '../../services';
import Login from '../../pages/login';
import './main.scss';

class Main extends Component {
  state = {user: null, loading: true};

  componentDidMount() {
    checkUser()
      .then((data) => this.setState({user: data, loading: false}))
      .catch(() => this.setState({loading: false}))

  }

  onLogin = (user) => {
    this.setState({
      user
    });
  };

  renderContent() {
    const {user} = this.state;
    return <>
      <h1>{user ? `Hello, ${user.firstName}` : 'Login'}</h1>
      {!user ? <Login onLogin={this.onLogin}/> : 'hello'}
    </>
  }

  render() {
    const {loading} = this.state;
    return (
      <main className="main">
        {loading ? 'LOADING' : this.renderContent()}
      </main>
    )
  }

}
;

export default Main;
