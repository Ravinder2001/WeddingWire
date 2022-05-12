import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from './src/Screens/Homepage';
import Vendors from './src/Screens/Vendors';
import Blog from './src/Screens/Blog';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Comment from './src/Screens/Comment';
import More from "./src/Screens/More"
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0,
                  padding: 7,
                  borderTopColor: focused ? '#008295' : 'black',
                  color: focused ? '#008295' : 'black',
                }}>
                <Icon
                  name="home"
                  size={30}
                  style={{color: focused ? '#008295' : 'black'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Vendors"
          component={Vendors}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0,
                  padding: 7,
                  borderTopColor: focused ? '#008295' : 'black',
                }}>
                <Icon
                  name="search"
                  size={30}
                  style={{color: focused ? '#008295' : 'black'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Blogs"
          component={Blog}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0,
                  padding: 7,
                  borderTopColor: focused ? '#008295' : 'black',
                }}>
                <Icon
                  name="book"
                  size={30}
                  style={{color: focused ? '#008295' : 'black'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Comments"
          component={Comment}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0,
                  padding: 8,
                  borderTopColor: focused ? '#008295' : 'black',
                }}>
                <Icons
                  name="comment"
                  size={30}
                  style={{color: focused ? '#008295' : 'black'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0,
                  padding: 7,
                  borderTopColor: focused ? '#008295' : 'black',
                }}>
                <Icon
                  name="md-options"
                  size={30}
                  style={{color: focused ? '#008295' : 'black'}}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
