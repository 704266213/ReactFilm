'use strict';

import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'

import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/RootReducer';

// thunkMiddleware：处理异步Action
// apiMiddleware：统一处理API请求。一般情况下，每个 API 请求都至少需要 dispatch 三个不同的 action（请求前、请求成功、请求失败），通过这个中间件可以很方便处理。
// loggerMiddleware：开发环境调试使用，控制台输出应用state日志

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore,loggerMiddleware);

//实现action异步操作，必须要引入middleware
// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState)

    return store;

}

