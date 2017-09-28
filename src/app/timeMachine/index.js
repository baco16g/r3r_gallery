import '../../stylus/style.styl'

import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'

import reducers from './reducers'
import TubeContainer from './containers/TubeContainer'

const store = createStore(reducers, compose(
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));



ReactDOM.render(
	<Provider store={store}>
		<TubeContainer/>
	</Provider>
, document.getElementById('root'));
