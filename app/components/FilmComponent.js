import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    FlatList
} from 'react-native';
import LoadingComponent from "../widget/LoadingComponent.js"
import {loadingSuccess, loadingFail} from '../actions/LoadingAction';
import FilmItem from "../item/FilmItem"
import PtrFrame from '../widget/PtrComponent';

import axios from 'axios'


const {height} = Dimensions.get('window');

export default class FilmComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    startRequest = (dispatch) => {
        var selfDispatch = dispatch
        if (dispatch == null) {
            var ptrFrame = this.ptrFrame
        }
        axios.get('https://raw.githubusercontent.com/704266213/data/master/WebContent/data/filmlist2.txt')
            .then(function (response) {
                console.log("=========loadingSuccess==============");
                console.log("==========state==============" + response.data.state);
                console.log("==========message==============" + response.data.message);
                console.log("==========result==============" + response.data.result);

                if (selfDispatch != null) {
                    selfDispatch(loadingSuccess(response.data.result))
                } else {
                    console.log("=========ptr==============" + ptrFrame);
                    ptrFrame.refreshComplete();
                }
                //this.refs.ptr.refreshComplete;

                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
            })
            .catch(function (error) {
                console.log("=========error==============" + error);
                selfDispatch(loadingFail())
            });
    }


    render() {
        console.log('==========FilmComponent=========render=============')
        return (<View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.title}>首页</Text>
            </View>
            <View style={styles.loadingComponent}>
                <LoadingComponent  ref={(loadingComponent) => this.loadingComponent = loadingComponent}
                                  onShowRenderView={this.onShowRenderView} startRequest={this.startRequest}/>
            </View>

        </View>);
    }

    filmSeparator = () => {
        return <View style={styles.filmSeparator}/>;
    }

    renderFilmItem = (info: Object) => (
        <FilmItem
            info={info.item}
            navigation={this.props.navigation}
        />
    );

    keyExtractor = (item, index) => index;

    onShowRenderView = () => {
        console.log('================render=============' + this.loadingComponent.props)
        console.log('================render=============' + this.loadingComponent)
        var method = this.loadingComponent
        for (var key in method) {
            var description = "key = " + key + " , value = " + method[key];
            console.log('================description=============' + description)
        }
        console.log('================loadState=============' + this.loadingComponent.store.getState().loadingReducer.loadState)
        console.log('================result=============' + this.loadingComponent.store.getState().loadingReducer.result)

        var result = this.loadingComponent.store.getState().loadingReducer.result.filmModels
        for (var key in result) {
            var description = "key = " + key + " , value = " + result[key].filmName;
            console.log('================description=============' + description)
        }

        return (
            <PtrFrame
                ref={(ptrFrame) => this.ptrFrame = ptrFrame}
                handleRefresh={() => {
                    //this.refs.loadingComponent.initRequest
                    this.startRequest(null)
                }}
                durationToCloseHeader={300}
                durationToClose={200}
                resistance={2}
                pinContent={false}
                ratioOfHeaderHeightToRefresh={1.2}
                pullToRefresh={false}
                keepHeaderWhenRefresh={true}
                style={{flex: 1}}>
                <FlatList
                    data={result}
                    renderItem={this.renderFilmItem}
                    keyExtractor={this.keyExtractor}
                    contentContainerStyle={[styles.containerList]}//设置cell的样式
                    ItemSeparatorComponent={this.filmSeparator}
                />
            </PtrFrame>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    toolbar: {
        height: 50,
        backgroundColor: "#0F9C00",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    filmSeparator: {
        height: 1,
        backgroundColor: '#0F9C00'
    },
    loadingComponent: {
        flex: 1,
    },
    containerList: {
        justifyContent: 'flex-end',
    }
})


