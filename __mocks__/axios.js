export default {
  get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'Rocket 1' }, { id: 2, name: 'Rocket 2' }] })),
};
