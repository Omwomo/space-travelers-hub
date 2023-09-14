import rocketReducer, { fetchRockets, reserveRocket, cancelRocketReservation } from '../src/redux/rockets/rocketSlice';

describe('rocketSlice reducer', () => {
  it('should handle reserveRocket', () => {
    const initialState = {
      rockets: [{ id: 1, reserved: false },
        { id: 2, reserved: false }],
      isLoading: false,
      error: undefined,
    };
    const action = { type: reserveRocket.type, payload: 1 };
    const newState = rocketReducer(initialState, action);
    expect(newState.rockets[0].reserved).toBe(true);
  });

  it('should handle cancelRocketReservation', () => {
    const initialState = {
      rockets: [{ id: 1, reserved: true },
        { id: 2, reserved: false }],
      isLoading: false,
      error: undefined,
    };
    const action = { type: cancelRocketReservation.type, payload: 1 };
    const newState = rocketReducer(initialState, action);
    expect(newState.rockets[0].reserved).toBe(false);
  });
});

describe('fetchRockets async action creator', () => {
  it('should dispatch the correct actions on successful fetch', async () => {
    const dispatch = jest.fn();
    await fetchRockets()(dispatch);

    // Assertions to check if the correct actions are dispatched
  });

  // Tests for pending and rejected cases.
});
