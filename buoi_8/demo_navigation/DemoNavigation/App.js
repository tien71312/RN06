import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/home/HomePage';
import DetailPage from './screens/detail/DetailPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { screens } from './common/Contant';
import Menu from './screens/menu/MainMenu';
import Search from './screens/search/Search';
import Like from './screens/like/Like';
import User from './screens/user/User';
import { ICONS } from './common/Images';
import { COLORS } from './common/Theme';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      //NavigationContainer chỉ khai báo một lần duy nhất và ở page đầu trang
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName='home'>
      //     {/*  name: tên  của màn hình được tạo trong Navigation Container
      //          component: Giao diện sẽ được hiển thị lên màn hình
      //           */}
      //     <Stack.Screen name="home" component={HomePage} />
      //     <Stack.Screen name="detail" component={DetailPage} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // <NavigationContainer>
      //   <StackNavigator />
      //  </NavigationContainer> 



      <NavigationContainer> 
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false
          }}
        >
          <Tab.Screen name={screens.tab_home} component={Menu} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width:24,
                height:24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} source={ICONS.cutlery} />
            )
          }} />
          <Tab.Screen name={screens.tab_search} component={Search} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width:24,
                height:24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} source={ICONS.search} />
            )
          }} /> 
          <Tab.Screen name={screens.tab_like} component={Like} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width:24,
                height:24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} source={ICONS.like} />
            )
          }} /> 
          <Tab.Screen name={screens.tab_user} component={User} options={{
            tabBarIcon: ({focused})=>(
              <Image style={{
                width:24,
                height:24,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }} source={ICONS.user} />
            )
          }} /> 
        </Tab.Navigator>
      </NavigationContainer>

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