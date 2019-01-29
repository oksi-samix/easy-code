import {connect} from 'react-redux';
import {login} from '../../store/user';

const Login = ({ dispatch }) => {
  const onSubmit = (ev) => {
    ev.preventDefault();
    const {elements} = ev.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value,
    };
    dispatch(login(data));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Enter email"
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <br />
      <input
        type="submit"
        placeholder="Login"
      />
    </form>
  );
};

export default connect()(Login);
