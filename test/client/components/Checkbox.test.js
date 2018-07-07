import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Checkbox from 'client/components/Checkbox/Checkbox';

describe('With Enzyme Checkbox component', () => {
  test('should be checked when isChecked is true', () => {
    const props = { value: 'option1', label: 'Option 1', isChecked: true };
    const wrapper = shallow(
      <Checkbox {...props} />,
    );
    const p = wrapper.find({ checked: true });
    expect(p.length).toBe(1);
  });

  test('should not be checked when isChecked is false', () => {
    const props = { value: 'option1', label: 'Option 1', isChecked: false };
    const wrapper = shallow(
      <Checkbox {...props} />,
    );
    const p = wrapper.find({ checked: false });
    expect(p.length).toBe(1);
  });

  test('onChange should be called when clicked', () => {
    const onChange = sinon.spy();
    const props = { onChange, value: 'option1', label: 'Option 1', isChecked: false };
    const wrapper = shallow(
      <Checkbox {...props} />,
    );
    wrapper.find('[type="checkbox"]').simulate('change', { target: { checked: true } });
    expect(onChange.called).toBe(true);
  });
});
