import * as React from 'react';
import {Main} from './src/Main';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as GestureHandler from 'react-native-gesture-handler';
import {client} from './src/api/graphql/client';
import {persistor, store} from './src/store';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandler.GestureHandlerRootView style={{flex: 1}}>
          <Main />
        </GestureHandler.GestureHandlerRootView>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

export default App;
