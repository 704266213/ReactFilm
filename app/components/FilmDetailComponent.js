import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    BackHandler
} from 'react-native';

const {height} = Dimensions.get('window');

export default class FilmDetailComponent extends Component<{}> {

    constructor(props) {
        super(props);
    }

    //组件挂载的时候调用
    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', function () {
        //     console.log('=================hardwareBackPress======================')
        //     this.props.navigation()
        //     return true
        // });
    }

    render() {
        const {goBack} = this.props.navigation;
        const {filmInfo} = this.props.navigation.state.params.filmInfo.info;
        console.log('==========filmName===================' + this.props.navigation.state.params.filmInfo.info.filmName)
        console.log('==========releaseDate===================' + this.props.navigation.state.params.filmInfo.info.releaseDate)

        return (<View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableOpacity style={styles.back}
                                      activeOpacity={0.5}
                                      onPress={() => {
                                          goBack()
                                      }}>
                        <Image style={styles.backIcon}
                               source={require('../images/toolbar_back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>影院详情</Text>
                </View>
                <Text style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 60,
                    textAlign: 'center',
                    marginTop:40
                }}>{this.props.navigation.state.params.filmInfo.info.filmName}</Text>
                <Text style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 60,
                    textAlign: 'center'
                }}>{this.props.navigation.state.params.filmInfo.info.releaseDate}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#0F9C00",
        alignItems: 'center'
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingRight: 50
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,

    },
    backIcon: {
        height: 40,
        width: 40
    }

})