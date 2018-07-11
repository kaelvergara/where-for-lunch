import React from 'react';
import { shallow } from 'enzyme';
import Place from 'client/components/Place/Place';
import renderer from 'react-test-renderer';
import Map from 'client/components/Map/Map';

describe('With Enzyme, Place component', () => {
  test('should not render rating section when no rating passed over', () => {
    const props = { place: { hehe: 'haha' } };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.rating');
    expect(p.length).toBe(0);
  });

  test('should render \'Where for lunch?\' when no name is passed over', () => {
    const props = { place: { } };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.name');
    expect(p.text()).toBe('Where for lunch?');
  });

  test('should render name when name is present', () => {
    const props = { place: { name: 'fastfood' } };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.name');
    expect(p.text()).toBe('fastfood');
  });

  test('should \`See More\` link when theme is set to summarized', () => {
    const props = { place: { id: 1 }, theme: 'summarized' };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.seeMore');
    expect(p.length).toBe(1);
  });

  test('should not show photos when theme is set to summarized', () => {
    const props = { place: { }, theme: 'summarized' };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.photoLabel');
    expect(p.length).toBe(0);
  });

  test('should show photos when theme is set to detailed', () => {
    const props = { place: { photos: [] }, theme: 'detailed' };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.photoLabel');
    expect(p.length).toBe(1);
  });

  test('should render 3 photos when 3 photos are given', () => {
    const props = { place: { photos: ['a.png', 'b.png', 'c.png'] }, theme: 'detailed' };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find('.photo');
    expect(p.length).toBe(3);
  });

  test('given a coordinate should render a map', () => {
    const props = { place: { coordinates: { latitude: 14.5839248015233, longitude: 121.123764663935 } }, theme: 'detailed' };
    const wrapper = shallow(
      <Place {...props} />,
    );
    const p = wrapper.find(Map);
    expect(p.length).toBe(1);
  });
});

test('With Jest snapshot, Place component renders rating section when present', () => {
  const place = { hehe: 'haha', rating: 3.5 };
  const placeComponent = renderer
    .create(<Place place={place} />)
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});
