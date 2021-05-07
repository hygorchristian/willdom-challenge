import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Global from './styles/global';
import Local from './screens/Local';
import Remote from './screens/Remote';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/local" />} />
          <Route exact path="/local" component={Local} />
          <Route exact path="/remote" component={Remote} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
