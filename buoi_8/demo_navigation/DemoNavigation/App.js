import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/home/HomePage';
import DetailPage from './screens/detail/DetailPage';
const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      //NavigationContainer chỉ khai báo một lần duy nhất và ở page đầu trang
      <NavigationContainer>
        <Stack.Navigator initialRouteName='detail'>
          {/*  name: tên  của màn hình được tạo trong Navigation Container
               component: Giao diện sẽ được hiển thị lên màn hình
                */}
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="detail" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}