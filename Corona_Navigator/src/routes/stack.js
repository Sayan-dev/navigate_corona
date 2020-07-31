import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {BlankHeader} from '../components/headers';
import Home from '../screens/Home/Home';
import TrackScreen from '../screens/TrackScreen';


// const screens = {
//   Home: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <BlankHeader title='LOGO' navigation={navigation} />
//       }
//     },
//   },
  
// };

// home stack navigator screens
const Stack=createStackNavigator();
const RootStack = ()=> {
  return(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ 
      gestureEnabled: false,
      headerStyle: {backgroundColor: "#FF3D00", height: 60 },
    }}
  >
    <Stack.Screen
      name="Home"
      options={{ title: 'My app' }}
    >
        {props=><Home {...props}/>}
    </Stack.Screen>
    <Stack.Screen
      name="TrackScreen"
      component={TrackScreen}
      options={{title:"Track"}}
    />
  </Stack.Navigator>
  );

};

export default RootStack;


