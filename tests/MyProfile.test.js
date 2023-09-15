import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../src/compnents/MyProfile';
import store from '../src/redux/store';

it('matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
