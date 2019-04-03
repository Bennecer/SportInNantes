import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'react-native-elements'
import Home from '../Components/Home/Home';
import PlaceDetail from '../Components/Places/PlaceDetail';
import Places from '../Components/Places/Places';
import Events from '../Components/Events/Events';
import Profile from '../Components/Profile/Profile';


const PlacesStackNavigator = createStackNavigator({
    Places : {
        screen : Places,
    },
    PlaceDetail : {
        screen : PlaceDetail
    },
},{
    headerMode:'none',
}
);

const tabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
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
        screen: Events,
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
export default createAppContainer(tabNavigator);