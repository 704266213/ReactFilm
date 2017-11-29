import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import PtrFrame from '../widget/PtrComponent';

const {height} = Dimensions.get('window');

export default class MineComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    _getData() {
        this.timer = setTimeout(() => {
            this.refs.ptr.refreshComplete();
        }, 1500);
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return ( <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <PtrFrame
                ref='ptr'
                handleRefresh={() => this._getData()}
                durationToCloseHeader={300}
                durationToClose={200}
                resistance={2}
                pinContent={false}
                ratioOfHeaderHeightToRefresh={1.2}
                pullToRefresh={false}
                keepHeaderWhenRefresh={true}
                style={{flex: 1}}>
                <TouchableHighlight style={{flex: 1, flexDirection: 'column'}}>
                    <View>
                        <View style={{backgroundColor: '#00AAAA', height: 200}}/>
                        <View style={{backgroundColor: '#FFAAAA', height: 200}}/>
                        <View style={{backgroundColor: '#FFAA55', height: 200}}/>
                        <View style={{backgroundColor: '#FFAAFF', height: 200}}/>
                        <View style={{backgroundColor: '#00AA99', height: 200}}/>
                        <View style={{backgroundColor: '#FF99AA', height: 200}}/>
                    </View>
                </TouchableHighlight>
            </PtrFrame>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
        paddingTop: height / 4.5
    },
    errorTips: {
        color: "#9E9E9E",
        fontSize: 20,
        textAlign: "center",
        marginTop: 5
    }
})