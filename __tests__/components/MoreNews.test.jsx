import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../customRender';
import MoreNews from '../../src/components/MoreNews';
import data from '../../src/components/MoreNews/data';

describe('Testing more news sub-footer', () => {
  it('loads more news and list the items', async () => {
    render(<MoreNews />);

    await waitFor(() => screen.getByTestId('more-news'));

    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      expect(screen.getByTestId('more-news')).toHaveTextContent(item.author);
      expect(screen.getByTestId('more-news')).toHaveTextContent(item.title);
    }
  });
});
