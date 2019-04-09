import { createStackNavigator } from 'react-navigation'

import Login from '../Components/Login/Login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default LoggedOutNavigator