import conditionReducer from '../../../client/reducers/conditionReducer';
import * as types from '../../../client/actions/conditionActionTypes';

describe('Condition Reducer', () => {
  test('should return the initial state', () => {
    expect(conditionReducer(undefined, {})).toEqual(
      {
        radius: 500,
        categories: [],
      },
    );
  });

  test('should handle SET_RADIUS', () => {
    expect(
      conditionReducer([], {
        type: types.SET_RADIUS,
        payload: 500,
      }),
    ).toEqual(
      {
        radius: 500,
      },
    );
  });

  test('should handle SET_LAT_LNG', () => {
    expect(
      conditionReducer({}, {
        type: types.SET_LAT_LNG,
        payload: {
          latitude: 123,
          longitude: 456,
        },
      }),
    ).toEqual(
      {
        latitude: 123,
        longitude: 456,
      },
    );
  });

  describe('should handle TOGGLE_CATEGORY', () => {
    test('when given category is absent', () => {
      expect(
        conditionReducer(
          {
            categories: [],
          }, {
            type: types.TOGGLE_CATEGORY,
            payload: 'fastfood',
          },
        ),
      ).toEqual(
        {
          categories: ['fastfood'],
        },
      );
    });

    test('when given category is present', () => {
      expect(
        conditionReducer(
          {
            categories: ['fastfood'],
          }, {
            type: types.TOGGLE_CATEGORY,
            payload: 'fastfood',
          },
        ),
      ).toEqual(
        {
          categories: [],
        },
      );
    });
  });
});
