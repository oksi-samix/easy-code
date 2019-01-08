import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import Form from '../../components/form';

class CreateUser extends Component {

  static propTypes = {
    info: PropTypes.object,
    user: PropTypes.object,
  }

  state = {
    redirect: false
  };

  render() {
    return (
      <>
        <Form/>
        {this.state.redirect && <Redirect to="/" />}
        <button onClick={() => this.setState({redirect: true})}>redirect by REDIREC comp</button>
        <button onClick={() => this.props.history.push('/')}>redirect by props</button>
      </>

    )
  }

}

export default CreateUser
