import {shallow} from 'enzyme';
import { AppComponent } from '../appComponent';
import {getInfo, cleanInfo} from '../store/category';


describe('<AppComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find("Header, Main").length).toBe(2);
  });

  it('should render', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should send action getInfo () if user changed', () => {
    const fakeDispatch = jest.fn()
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} />);
    const user = {}
    wrapper.setProps({user})
    expect(fakeDispatch).toHaveBeenCalledWith(getInfo());
  })

  it('should send action getInfo () if user changed', () => {
    const fakeDispatch = jest.fn()
    const history = {push:  jest.fn()}
    const user = {}
    const wrapper = shallow(<AppComponent dispatch={fakeDispatch} user={user} history={history}/>);
    wrapper.setProps({user : null})
    expect(history.push).toHaveBeenCalledWith('/');
  })

});
