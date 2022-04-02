import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import React from 'react';
// import { reducers } from './reducers';
// import { FetchTodosAction } from './actions';
// import ReactDOM from 'react-dom';
// import App from '../App';

// const middleware = [thunk];
// const store = createStore(reducers, applyMiddleware(...middleware));

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// interface RootProviderProps {
//   children?: React.ReactNode;
// }

// // export const RootProvider: React.FC<RootProviderProps> = (
// //   props: RootProviderProps
// // ): JSX.Element => {
// //   return <Provider store={store}> {props.children} </Provider>;
// // };

// // export const RootProvider: React.FC<RootProviderProps> = (
// //   props
// // ): JSX.Element => {
// //   return (
// //     <Provider<FetchTodosAction> store={store}> {...props.children}</Provider>
// //   );
// // };
// ReactDOM.render(
//   <Provider store={store}><App/></Provider>,
//   document.querySelector('#root')
// );
