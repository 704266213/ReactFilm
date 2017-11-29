import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions
} from 'react-native';

const {height} = Dimensions.get('window');

export default class LoadingView extends Component<{}> {

    render() {
        return (<View style={styles.container}>
            <ActivityIndicator style={[styles.center, styles.gray]}
                               color="#0F9C00"
                               size="large"/>
            <Text style={styles.loadText}>正在加载中,请稍后...</Text>
        </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingTop: height / 4.5,
        alignItems: 'center',
    },
    loadText: {
        fontSize: 18,
        color: "#0F9C00",
        textAlign: "center",
        marginTop: 16
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        minHeight: 40,
        minWidth: 40
    },
    gray: {
        backgroundColor: '#00000000',
    },
})