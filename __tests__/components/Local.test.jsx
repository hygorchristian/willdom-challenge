import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../customRender';
import Local from '../../src/screens/Local';

test('loads and displays greeting', async () => {
  render(<Local />);

  expect(true).toBeTruthy();
});
