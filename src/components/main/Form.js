import React from 'react';

const roles = ['Admin', 'Guest', 'Anonim'];

export default class Form extends Component {
  static getDerivedStateFromProps({data}, currentState) {
    if (!data) return null;

    const props = Object.entries(data);
    const isEmpty = props.some(([key]) => !currentState[key].value);

    if (isEmpty) {
      const state = {};
      props.forEach(([key, value]) => state[key] = {value, error: ''});
      return state;
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.fields = [
      {label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, placeholder: 'Enter email'},
      {label: 'name', reg: /^[^ ]{3,20}$/, placeholder: 'Enter name'},
      {label: 'surname', reg: /^[^ ]{3,20}$/, placeholder: 'Enter surname'},
      {label: 'password', reg: /^[^ ]{6,20}$/, placeholder: 'Enter password', secure: true},
      {label: 'repeatPassword', reg: /^[^ ]{6,20}$/, placeholder: 'Enter pass', secure: true}
    ];
    this.state = {};
    // this.state = this.fields.reduce((prev, next) => (prev[next.label] = {value: ''}) && prev, {});
    this.fields.forEach(({label}) => this.state[label] = ({
      value: '',
      error: false
    }));
  }


  handelChange = ({target}) => {
    const field = this.state[target.name];
    if (/checkbox|radio/i.test(target.type)) {
      this.setState({[target.name]: {...field, value: target.checked}});
    } else {
      this.setState({[target.name]: {...field, value: target.value}});
    }

  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const data = {} ;
    Object.entries(this.state).forEach(([key, {value}]) => data[key] = value);
    if(this.props.onSave){
      this.props.onSave(data)
    }
  };

  getButtonState() {
    return Object.entries(this.state).some(([key, {error, value}]) => error || !value);
  }

  validate = ({target}) => {
    const field = this.fields.find(item => item.label === target.name);
    const stateField = this.state[target.name];
    let err = '';

    err = !target.value.length || !field.reg.test(target.value) ? "Is not valid" : "";
    if (target.name === 'repeatPassword' && this.state.password.value !== target.value) {
      err = 'Passwords are not equal';
    }
    this.setState({[target.name]: {...stateField, error: err}});
  }


  render() {
    return (
      <form action="#" onSubmit={this.onSubmit}>
        <ul>
          {this.fields.map((field, index) => (
            <li key={index}>
              <input type={field.secure ? 'password' : 'text'}
                     name={field.label}
                     palaceholder={field.placeholder}
                     value={this.state[field.label].value}
                     onChange={this.handelChange}
                     onBlur={this.validate}
              />
              {this.state[field.label].error && <mark>{this.state[field.label].error}</mark>}
            </li>))}
        </ul>
        {/*<select name="role" value={this.state.role}*/
        }
        {/*onChange={this.handelChange}>*/
        }
        {/*{roles.map(role =>*/
        }
        {/*<option value={role} key={role}>{role}</option>)}*/
        }
        {/*</select>*/
        }

        {/*<p>*/
        }
        {/*<label htmlFor="mail">Send me a mail {this.state.mail}</label>*/
        }
        {/*<input*/
        }
        {/*name="mail"*/
        }
        {/*type="checkbox"*/
        }
        {/*checked={this.state.mail}*/
        }
        {/*onChange={this.handelChange}*/
        }
        {/*/>*/
        }
        {/*</p>*/
        }
        <input type="submit" value="send" disabled={this.getButtonState()}/>
      </form>
    );
  }
}
