import {shallow, mount} from 'enzyme';
import { AppComponent } from '../appComponent';
import { Header } from '.././components/header';
import {getInfo, cleanInfo} from '../store/category';
import {check, logout} from '../store/user';
import {cleanError} from '../store/status';

describe('<AppComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find("Header").length).toBe(1);
  });

  it('should render', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send action getInfo () if user changed', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const user = {};
    wrapper.setProps({user});
    expect(fakeDispatch).toHaveBeenCalledWith(getInfo());
  });

  it('should redirect to intro page ', () => {
    const fakeDispatch = jest.fn();
    const history = {push:  jest.fn()};
    const user = {};
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} user={user} history={history}/>);
    wrapper.setProps({user : null});
    expect(history.push).toHaveBeenCalledWith('/');
  });
  
  it('should cleanInfo when user change ', () => {
    const fakeDispatch = jest.fn();
    const user = {};
    const history = {push:  jest.fn()};
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} user={user} history={history}/>);
    wrapper.setProps({user : null});
    history.push('/');
    expect(fakeDispatch).toHaveBeenCalledWith(cleanInfo());
  });
  
  // it('should cleanError when error appear ', () => {
  //   const fakeDispatch = jest.fn();
  //   const error = '';
  //   const wrapper = shallow(<AppComponent dispatch={fakeDispatch} error={error}/>);
  //   const instance = wrapper.instance();
  //   console.log(instance);
  //   instance.container = { error : 'Error title' } ;
  //   wrapper.setProps({error : 'error'});
  //   expect(fakeDispatch).toHaveBeenCalledWith(cleanError());
  // });
  
  it('should onLogOut  call logout', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const instance = wrapper.instance();
    instance.onLogout();
    expect(fakeDispatch).toHaveBeenCalledWith(logout());
  });
  
  it('should send action check user on componentDidMount ', () => {
    const fakeDispatch = jest.fn();
    shallow(<AppComponent dispatch={fakeDispatch} />);
    expect(fakeDispatch).toHaveBeenCalledWith(check());
  });
  
});
