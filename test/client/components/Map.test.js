import React from 'react';
import { shallow } from 'enzyme';
import Place from 'client/components/Place/Place';;
import Map from 'client/components/Map/Map';

describe('With Enzyme, Map Component', () => {
  test('should render map when complete parameters are given', () => {
    const props = { lat: 1, long: 2, API_KEY: '123', zoom: 15 };
    const wrapper = shallow(
      <Map {...props} />,
    );
    const p = wrapper.find('.map');
    expect(p.length).toBe(1);
  });

  test('should not render map when all parameters are missing', () => {
    const props = { };
    const wrapper = shallow(
      <Map {...props} />,
    );
    const p = wrapper.find('.map');
    expect(p.length).toBe(0);
  });
});
