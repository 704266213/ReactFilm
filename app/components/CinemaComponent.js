import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';


const {height} = Dimensions.get('window');

export default class CinemaComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }


    render() {
        const {navigate} = this.props.navigation;
        console.log('==========CinemaComponent=========render=============')
        return (<View style={styles.container}>
            <View>
                <Text style={styles.errorTips}>电影</Text>
                <TouchableHighlight style={styles.onRefreshButton} onPress={() =>  navigate('FilmDetailComponent', {user: 'FilmDetailComponent'})}
                                    activeOpacity={0.5}
                                    underlayColor="rgb(210, 230,255)">
                    <Text style={styles.onRefreshText}>跳转详情</Text>
                </TouchableHighlight>
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
    },
    onRefreshButton: {
        backgroundColor: '#FFFFFF',
        minHeight: 40,
        minWidth: 160,
        borderColor: '#F1F1F1',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    onRefreshText: {
        color: "#F6369A",
        textAlign: "center",
        fontSize: 20
    }
})

