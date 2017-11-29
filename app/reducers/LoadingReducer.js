'use strict';

import * as types from '../actions/LoadingActionTypes';

// 初始状态
const initialState = {
    loadState: -1,
    result: null
}

export default function LoadState(state = initialState, action) {
    switch (action.type) {
        case types.Loading: // 开始请求
            return Object.assign({}, ...state, {
                loadState: -1,
                result: null
            });
        case types.LoadingFail: // 请求失败
            return Object.assign({}, ...state, {
                loadState: 500,
                result: null
            });
        case types.LoadingSuccess: // 请求成功
            return Object.assign({}, ...state, {
                loadState: 200,
                result: action.result
            })
        default:
            return state;
    }
}


