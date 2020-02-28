export default {
  get: jest.fn(() => Promise.resolve({
    data: [
    {
      id: 1,
      title: 'This is a tech post',
    },
    {
      id: 2,
      title: 'Post about testing code',
    }
  ]})),
};
