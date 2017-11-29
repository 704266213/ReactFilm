import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';


const {height} = Dimensions.get('window');

export default class DiscoverComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {

        return (<View style={styles.container}>
            <View>
                <Text style={styles.errorTips}>发现</Text>
            </View>

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