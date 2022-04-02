import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers';

import { MainContainer } from './components/MainContainer';

const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App(): JSX.Element {
	return (
		<div className="App">
			<Provider store={store}>
				<MainContainer />
			</Provider>
		</div>
	);
}

export default App;
