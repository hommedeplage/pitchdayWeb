import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';

const rootReducer = combineReducers({
    locale,
});

export default rootReducer;
