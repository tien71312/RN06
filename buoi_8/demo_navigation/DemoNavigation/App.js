import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/home/HomePage';
import DetailPage from './screens/detail/DetailPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      //NavigationContainer chỉ khai báo một lần duy nhất và ở page đầu trang
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          {/*  name: tên  của màn hình được tạo trong Navigation Container
               component: Giao diện sẽ được hiển thị lên màn hình
                */}
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="detail" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Tab.Navigator>
      //     <Tab.Screen name='home' component={HomePage} />
      //     <Tab.Screen name='detail' component={DetailPage} />
      //   </Tab.Navigator>
      // </NavigationContainer>

      // <NavigationContainer>
      //   <Drawer.Navigator>
      //     <Drawer.Screen name='home pro' component={HomePage} />
      //     <Drawer.Screen name='detail' component={DetailPage} />
      //   </Drawer.Navigator>
      // </NavigationContainer>

    )
  }
}

// Viết giao diện có 2 Fiel soA và soB và button tính tổng.
// Tính giá trị của số A và số B hiển thị kết quả này qua màn hình detail
// Kết quả là : kq