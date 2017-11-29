'use strict';

import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    Dimensions
} from 'react-native';


const {width, height} = Dimensions.get('window');


export default class FilmItem extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        let {info} = this.props
        const {navigate} = this.props.navigation;

        return (
            <TouchableHighlight onPress={() => {
                navigate('FilmDetailComponent', {filmInfo: {info}})
            }}
                activeOpacity={0.5}
                underlayColor="rgb(210, 230,255)">
                <View style={styles.container}>
                <Image source={{uri: info.filmUrl}} style={styles.filmImage}/>
                <View style={styles.filmContainer}>
                <Text style={styles.filmName}>{info.filmName}</Text>
                <Text style={styles.filmText}>{info.releaseDate}</Text>
                <Text numberOfLines={2} style={styles.filmText}>{info.filmActor}</Text>
                <Text numberOfLines={1} style={styles.filmText}>{info.filmDesc}</Text>
                </View>

                <TouchableHighlight style={styles.buy} onPress={() => {
                navigate('FilmDetailComponent', {filmInfo: {info}})
            }}
                activeOpacity={0.5}
                underlayColor="rgb(210, 230,255)">
                <Text style={styles.onRefreshText}>购买</Text>
                </TouchableHighlight>
                </View>
                </TouchableHighlight>
                )
                }
}


    const styles = StyleSheet.create({
        container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 80,
        width: width,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8
    },
        filmImage: {
        width: 80,
        height: 120,
        alignSelf: 'flex-start'
    },
        filmContainer: {
        alignSelf: 'flex-start',
        flex: 2,
        paddingLeft: 8,
        paddingRight: 8
    },
        filmName: {
        color: "#141823",
        fontSize: 20,
        textAlign: 'left',
    },
        filmText: {
        color: "#141823",
        fontSize: 14,
        textAlign: 'left',
        marginTop: 4
    },
        welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
        buy: {
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        minHeight: 28,
        minWidth: 60,
        borderColor: '#0F9C00',
        borderWidth: 1,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    }
    });

