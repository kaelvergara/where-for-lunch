import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from 'client/components/Button/Button';

describe('With Enzyme Button component', () => {
  test('should have disabled look when hasLocation is false', () => {
    const props = { theme: 'homepageClick', hasLocation: false };
    const wrapper = shallow(
      <Button {...props} />,
    );
    const p = wrapper.find('.homepageClick--disabled');
    expect(p.length).toBe(1);
  });

  test('should have enabled look when hasLocation is true', () => {
    const props = { theme: 'homepageClick', hasLocation: true };
    const wrapper = shallow(
      <Button {...props} />,
    );
    const p = wrapper.find('.homepageClick');
    expect(p.length).toBe(1);
  });

  test('onClick should not be called when hasLocation is false', () => {
    const onClick = sinon.spy();
    const props = { onClick, theme: 'homepageClick', hasLocation: false };
    const wrapper = shallow(
      <Button {...props} />,
    );
    wrapper.find('.homepageClick').simulate('click');
    expect(onClick.called).toBe(false);
  });

  test('onClick should be called when hasLocation is true', () => {
    const onClick = sinon.spy();
    const props = { onClick, theme: 'homepageClick', hasLocation: true };
    const wrapper = shallow(
      <Button {...props} />,
    );
    wrapper.find('.homepageClick').simulate('click');
    expect(onClick.called).toBe(true);
  });
});
