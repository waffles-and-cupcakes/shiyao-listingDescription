import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Amenities from '../src/amenities.jsx';
import HouseRules from '../src/houseRules.jsx';
import AboutHome from '../src/aboutHome.jsx';
import App from '../src/app.jsx';
import { shallowToJson } from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    App.prototype.componentDidMount.restore();
  });
  it('allows us to set props', () => {
    const wrapper = mount(<App bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
  it('renders the title', () => {
    const wrapper = render(<App title="Loading" />);
    expect(wrapper.text()).to.contain('Loading');
  });
  it('contains one element', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.length).to.equal(1);
  });
});




