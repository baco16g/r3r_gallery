import '../../stylus/style.styl'

import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'

import reducers from './reducers'
import ImageContainer from './containers/ImageContainer'

const store = createStore(reducers, compose(
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));



ReactDOM.render(
	<Provider store={store}>
		<ImageContainer/>
	</Provider>
, document.getElementById('root'));
