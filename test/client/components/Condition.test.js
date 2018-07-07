import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Condition from 'client/components/Condition/Condition';

describe('With Enzyme Condition component', () => {
  test('should render a radius when present', () => {
    const onSetRadius = sinon.spy();
    const props = { condition: { radius: 500 }, onSetRadius, categories: [] };
    const wrapper = shallow(
      <Condition {...props} />,
    );
    const p = wrapper.find({ defaultValue: 500 });
    expect(p.length).toBe(1);
  });

  test('onSetRadius should be called when a new radius is entered', () => {
    const onSetRadius = sinon.spy();
    const props = { condition: { radius: 500 }, onSetRadius, categories: [] };
    const wrapper = mount(
      <Condition {...props} />,
    );
    wrapper.find('[type="text"]').simulate('blur');
    expect(onSetRadius.called).toBe(true);
  });

  describe('Given a list of 3 categories', () => {
    const categories = [
      { value: 'bbq', title: 'Barbeque' },
      { value: 'hotdogs', title: 'Fast Food' },
      { value: 'cafes', title: 'Cafes' },
    ];
    const condition = { categories: [] };

    test('should render 3 checkboxes', () => {
      const onSetCategories = sinon.spy();
      const props = { condition, onSetCategories, categories };
      const wrapper = mount(
        <Condition {...props} />,
      );
      const p = wrapper.find('[type="checkbox"]');
      expect(p.length).toBe(3);
    });

    test('onSetCategories should be called when a checkbox is selected', () => {
      const onSetCategories = sinon.spy();
      const props = { condition, onSetCategories, categories };
      const wrapper = mount(
        <Condition {...props} />,
      );
      wrapper.find('[type="checkbox"]').first().simulate('change', { target: { checked: true } });
      expect(onSetCategories.called).toBe(true);
    });
  });
});
