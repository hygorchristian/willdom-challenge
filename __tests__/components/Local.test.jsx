import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../customRender';
import Local from '../../src/screens/Local';
import localNews from '../../src/services/localNews';
import { slug } from '../../src/utils/slug';

test('Local News component', async () => {
  render(<Local />);
  await waitFor(() => screen.getByTestId('local-news'));

  for (const item of localNews.news) {
    const id = slug(item.title);
    const description = item.description.split(' ').splice(0, 5).join(' ').trim();

    await waitFor(() => screen.getByTestId(id));

    expect(screen.getByTestId(id)).toHaveTextContent(item.title);
    expect(screen.getByTestId(id).getElementsByClassName('description')[0]).toHaveTextContent(description);
  }

  expect(true).toBeTruthy();
});
