import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import mockedAxios from 'axios';
import App from './App';

const fakeList = [
  { id: 1, title: 'This is a tech post' },
  { id: 2, title: 'This is a tech post' },
  { id: 3, title: 'This is a tech post' },
  { id: 4, title: 'This is a tech post' },
  { id: 5, title: 'This is a tech post' },
  { id: 6, title: 'This is a tech post' },
  { id: 7, title: 'This is a tech post' },
  { id: 8, title: 'This is a tech post' },
  { id: 9, title: 'This is a tech post' },
  { id: 10, title: 'This is a tech post' },
  { id: 11, title: 'This is a tech post' },
  { id: 12, title: 'This is a tech post' },
];


describe('App', () => {
  describe('when the fetch operation is pending', () => {
    it('shows a loading span', () => {
      const { getByText } = render(<App />);

      expect(getByText(/loading/i)).toBeInTheDocument();
      cleanup();
    });
  });

  describe('when fetch operation is done', () => {
    it('show a list of posts', async () => {
      const { getByTestId } = render(<App />)
      
      const listNode = await waitForElement(() => getByTestId('list'));
      
      expect(listNode).toBeInTheDocument();
    });
  });

  describe('when clicking the filter button', () => {
    it('shows only the first ten results', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: fakeList,
      });
      const { getByText, getByTestId } = render(<App />);

      const btnFilter = await waitForElement(() => getByText(/filter/i));
      
      fireEvent.click(btnFilter);

      expect(btnFilter).toBeInTheDocument();
      expect(getByTestId('list').children.length).toEqual(10);
    })
  })
});


  
