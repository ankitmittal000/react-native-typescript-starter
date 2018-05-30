import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './containers/Counter';
import rootReducer from './redux';

const store = compose()(createStore)(rootReducer);

export default function AppContainer() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

setTimeout(() => {
      let j=0;
      let obj;
      let i=0;
      obj.value;
    }, 3000);
