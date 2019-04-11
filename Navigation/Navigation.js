import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'
import Home from '../Components/Home/Home';
import PlaceDetail from '../Components/Places/PlaceDetail';
import Places from '../Components/Places/Places';
import Events from '../Components/Events/Events';
import EventDetail from '../Components/Events/EventDetail';
import Profile from '../Components/Profile/Profile';
import Login from '../Components/Login/Login';
import CreateEvent from '../Components/Places/CreateEvent';


const PlacesStackNavigator = createStackNavigator({
    Places : {
        screen : Places,
    },
    PlaceDetail : {
        screen : PlaceDetail
    },
    CreateEvent : {
        screen: CreateEvent
    }
},{
    headerMode:'none',
});

const EventsStackNavigator = createStackNavigator({
    Events : {
        screen : Events,
    },
    EventDetail : {
        screen : EventDetail
    },
},{
    headerMode:'none',
});

const HomeStackNavigator = createStackNavigator({
    Home : {
        screen : Home,
    },
},{
    headerMode:'none',
});

const tabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStackNavigator,
        navigationOptions : {
            tabBarIcon: ({focused}) => {
                return <Icon name="home" type="font-awesome" color={focused ? "#EE7123" : "#892685"} size={40}></Icon>
            }
        }
    },
    Places: {
        screen: PlacesStackNavigator,
        navigationOptions : {
            tabBarIcon: ({focused}) => {
                return <Icon name="map-marker" type="font-awesome" color={focused ? "#EE7123" : "#892685"} size={40}></Icon>
            }
        }
    },
    Events: {
        screen: EventsStackNavigator,
        navigationOptions : {
            tabBarIcon: ({focused}) => {
                return <Icon name="list-ul" type="font-awesome" color={focused ? "#EE7123" : "#892685"} size={40}></Icon>
            }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions : {
            tabBarIcon: ({focused}) => {
                return <Icon name="user" type="font-awesome" color={focused ? "#EE7123" : "#892685"} size={40}></Icon>
            }
        }
    }
},{
    tabBarOptions: {
        showLabel: false,
        showIcon: true
    }
})

const ModalStack = createStackNavigator({
    logout:{screen:Login},
    login:{screen:tabNavigator},
},{
    mode:'modal',
    headerMode:'none'
})
export default createAppContainer(ModalStack);