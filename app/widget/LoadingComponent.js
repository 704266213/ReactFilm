import React, {Component} from 'react';

import LoadingView from "./LoadingView.js"
import ReLoadView from "./ReLoadView.js"
import {connect} from 'react-redux';
import {loading} from '../actions/LoadingAction';

class LoadingComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initRequest()
    }

    onReLoad = () => {
        this.initRequest()
    }

    initRequest = () => {
        var dispatch = this.props.dispatch
        dispatch(loading())
        this.props.startRequest(dispatch)
    }

    render() {
        let loadState = this.props.loadState
        let onShowRenderView = this.props.onShowRenderView
        if (loadState == -1) {
            return (<LoadingView/>)
        } else if (loadState == 200) {
            return onShowRenderView(this.props.result)
        } else {
            return (<ReLoadView onReLoad={this.onReLoad}/>)
        }
    }

    /*
     * 当props改变的时候调用
     */
    componentWillReceiveProps(props) {
        // console.log('=================componentWillReceiveProps======================' + props.toString());
    }

    shouldComponentUpdate(nextProps, nextState) {
        //防止重复渲染
        return this.props.loadState !== nextProps.loadState || this.state !== nextState
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(store) {
    return {
        loadState: store.loadingReducer.loadState,
        result: store.loadingReducer.result
    };
}

export default connect(select)(LoadingComponent);


