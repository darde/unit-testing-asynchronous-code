import fetchPosts from './fetchPosts';
import mockedAxios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

describe('fetchPosts', () => {
  it('fetch the posts', async () => {
    const posts = await fetchPosts('posts');

    const expectedResponse = [
      {
        id: 1,
        title: 'This is a tech post',
      },
      {
        id: 2,
        title: 'Post about testing code',
      },
    ];

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}posts`);
    expect(posts).toEqual(expectedResponse);
  });
});
