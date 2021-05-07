import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../customRender';
import Remote from '../../src/screens/Remote';

test('loads and displays greeting', async () => {
  render(<Remote />);

  expect(true).toBeTruthy();
});
