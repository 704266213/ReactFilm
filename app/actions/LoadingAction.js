import {Loading, LoadingSuccess, LoadingFail} from './LoadingActionTypes';

const loading = () => ( {type: Loading, result: null});
const loadingSuccess = (result) => ({type: LoadingSuccess, result: result});
const loadingFail = () => ({type: LoadingFail, result: null});

export {
    loading,
    loadingSuccess,
    loadingFail
}


