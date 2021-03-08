import {createStore, compose,applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'
const sagaMiddleWare = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV !== "production" && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldNotReload:false
}) : compose
const configStore = () => {
    const middleWare = [
        thunk,
        sagaMiddleWare
    ]
    const enhencaer = [
        applyMiddleware(...middleWare)
    ]
   const store =  createStore(rootReducer,composeEnhancers(...enhencaer))
   sagaMiddleWare.run(rootSaga)
   return store;
}
export default configStore;