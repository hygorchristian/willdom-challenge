import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <Router history={history}>
      {children}
    </Router>
  </QueryClientProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
