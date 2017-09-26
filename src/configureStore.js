import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

function configureStore(preloadedState) {
	
	if (process.env.NODE_ENV === 'development')
	{
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		
		return (
			createStore(
				rootReducer,
				preloadedState,
				composeEnhancers(
					applyMiddleware(
						thunkMiddleware
					)
				)
			)
		)
	}
	
	return createStore(
		rootReducer,
		preloadedState,
		compose(applyMiddleware(thunkMiddleware))
	)
}

const languages = [
	{
		code: 'en',
		active:false,
		name: 'English'
	},
	{
		code: 'ru',
		active:false,
		name: 'Русский'
	},
	{
		code: 'zh',
		active: false,
		name: '简体中文'
	}
];

const initialState = {
	locale: {
		languages: languages,
		options: {
			renderInnerHtml: false,
			showMissingTranslationMsg: true
		}
	}
};

const store = configureStore(initialState);

export default store;

