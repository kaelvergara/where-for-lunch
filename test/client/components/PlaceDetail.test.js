import React from 'react';
import { shallow } from 'enzyme';
import PlaceDetail from 'client/components/PlaceDetail/PlaceDetail';

describe('With Enzyme, Place Detail', () => {
  describe('Given a place', () => {
    const place = {
      name: 'Some Restaurant',
      url: 'https://domain.com/some_restaurant',
      display_phone: '111-1111-1111',
      review_count: 1,
      rating: 3,
      location: {
        address1: 'Address 1',
        city: 'City 1',
        country: 'CT',
        state: 'RIZ',
      },
      coordinates: {
        latitude: 14.5839248015233,
        longitude: 121.123764663935,
      },
      photos: [
        'https://pics.com/1.jpg',
        'https://pics.com/2.jpg',
        'https://pics.com/3.jpg',
      ],
    };

    test('should render location', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.location');
      expect(p.text()).toBe('Address 1 City 1 CT');
    });

    test('should render phone number', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.phoneNumber');
      expect(p.text()).toBe('111-1111-1111');
    });

    test('should render phone number', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.phoneNumber');
      expect(p.text()).toBe('111-1111-1111');
    });

    test('should render website with link', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('[href="https://domain.com/some_restaurant"]');
      expect(p.length).toBe(1);
    });

    test('should render rating', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.rating');
      expect(p.text()).toBe('Rating: 3');
    });

    test('should render review count', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.reviews');
      expect(p.text()).toBe('Reviews: 1');
    });

    test('should render 3 photos', () => {
      const props = { details: place };
      const wrapper = shallow(
        <PlaceDetail {...props} />,
      );
      const p = wrapper.find('.photo');
      expect(p.length).toBe(3);
    });
  });
});
