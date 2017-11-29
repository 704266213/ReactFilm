import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {connect} from 'react-redux';


import FilmComponent from './FilmComponent';
import CinemaComponent from './CinemaComponent';
import DiscoverComponent from './DiscoverComponent';
import MineComponent from './MineComponent';
import FilmDetailComponent from './FilmDetailComponent';


const MainComponentTab = TabNavigator({
        FilmComponent: {
            screen: FilmComponent,
            navigationOptions: {
                tabBarLabel: '电影',
                headerTitle: '电影',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/film_normal.png')
                        }
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
        CinemaComponent: {
            screen: CinemaComponent,
            navigationOptions: {
                tabBarLabel: '影院',
                headerTitle: '影院',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/cinema_normal.png')
                        }
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
        DiscoverComponent: {
            screen: DiscoverComponent,
            navigationOptions: {
                tabBarLabel: '发现',
                headerTitle: '发现',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/discovery_normal.png')
                        }
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
        MineComponent: {
            screen: MineComponent,
            tabBarLabel: 'Profile',
            navigationOptions: {
                tabBarLabel: '我的',
                headerTitle: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/mine_normal.png')
                        }
                        style={[styles.tabBarIcon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
    }
    , {
        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#0F9C00', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
            scrollEnabled: false,
            style: {
                backgroundColor: '#F5FCFF', // TabBar 背景色
                height: 56,
                justifyContent: 'center',
                zIndex: 0,
                position: 'relative'
            },
            labelStyle: {
                fontSize: 10, // 文字大小,
                marginTop: 2,
            },
        },
    }
);


export default MainComponentNavigator = StackNavigator({
    MainComponentTab: {
        screen: MainComponentTab,
        navigationOptions: {
            header: null
        }
    },
    FilmDetailComponent: {
        screen: FilmDetailComponent,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'MainComponentTab'
});


const styles = StyleSheet.create({
    tabBarIcon: {
        width: 22,
        height: 22,
    }
});

//export default Launcher;

// const mapStateToProps = state => ({
//     counter: state.counter
// })
//
// export default connect(mapStateToProps)(Launcher);