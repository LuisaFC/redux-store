 import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { ICartState } from './modules/cart/types';


import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

/* 
    createStore é chamado apenas uma vez na aplicação
    Essa função é o valor inicial do store(estado global) - no caso estamos iniciando com um array vazio
*/

 const store = createStore(
     rootReducer, 
     composeWithDevTools(
         applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga)

 export default store;