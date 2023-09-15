import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../src/compnents/Rockets';

const mockStore = configureStore([]);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1, name: 'Rocket 1', reserved: false, description: 'Description 1', flickr_images: ['image_url_1'],
          },
          {
            id: 2, name: 'Rocket 2', reserved: true, description: 'Description 2', flickr_images: ['image_url_2'],
          },
        ],
      },
    });
  });

  it('renders rockets with correct details', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    // Check if rocket details are rendered correctly
    expect(screen.getByText(/Rocket 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve Rocket/i)).toBeInTheDocument();

    expect(screen.getByText(/Rocket 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel Reservation/i)).toBeInTheDocument();
  });

  it('clicking Reserve Rocket dispatches reserveRocket action', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Reserve Rocket/i));

    // Check if the reserveRocket action is dispatched
    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'rockets/reserveRocket', payload: 1 }); // Assuming the payload is correct
  });

  it('clicking Cancel Reservation dispatches cancelRocketReservation action', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Cancel Reservation/i));

    // Check if the cancelRocketReservation action is dispatched
    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'rockets/cancelRocketReservation', payload: 2 }); // Assuming the payload is correct
  });
});
