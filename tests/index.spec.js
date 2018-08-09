import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Portfolio from '../src/index';

Enzyme.configure({ adapter: new Adapter() });

describe('react-portfolio', () => {
  it('should instantiate without crashing', () => {
    mount(<Portfolio />);
  });
});
