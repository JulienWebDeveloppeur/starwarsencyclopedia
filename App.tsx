import * as React from 'react';
import {Main} from './src/Main';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/api/graphql/client';

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

export default App;
