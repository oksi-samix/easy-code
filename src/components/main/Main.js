import {checkUser} from '../../services';
import Login from '../../pages/login';
import './main.scss';
import CustomeInput from '../customeInput/CustomeInput';
import Home from '../../pages/home';

const fn = text => console.log(text);

class Main extends Component {

  renderContent() {
    const {user, info} = this.props;
    return <>
      {user ? <Home user={user} info={info} /> : <Login onLogin={this.props.onLogin}/>}
    </>
  }


  render() {
    const {loading} = this.props;
    return (
      <main className="main">
        {/*{loading ? 'LOADING' : this.renderContent()}*/}

        {/*<CustomeInput onLoose={fn}/>*/}

        {this.props.children}
      </main>
    )
  }

}
;

export default Main;
