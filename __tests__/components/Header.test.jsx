import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { render } from '../customRender';
import Header from '../../src/components/Header';

describe('Testing header', () => {
  it('loads header and display the local and remote options', async () => {
    render(<Header />);

    await waitFor(() => screen.getByTestId('header'));
    expect(screen.getByRole('/local')).toHaveTextContent('Local Articles');
    expect(screen.getByRole('/remote')).toHaveTextContent('Remote Articles');
  });

  it('show the search bar when the open search bar button is pressed and closes when the close button is pressed', async () => {
    render(<Header />);

    await waitFor(() => screen.getByTestId('header'));
    expect(screen.getByTestId('searchbar')).not.toHaveClass('open');
    fireEvent.click(screen.getByTestId('open-search-btn'));
    expect(screen.getByTestId('searchbar')).toHaveClass('open');
    fireEvent.click(screen.getByTestId('close-search-btn'));
    expect(screen.getByTestId('searchbar')).not.toHaveClass('open');
  });
});
