import { View, Text } from 'react-native'
import React from 'react'
import DemoRedux from './screens/redux/DemoRedux'
import { Provider } from 'react-redux'
import { store } from './store'
import DemoFuncRedux from './screens/redux/DemoFuncRedux'
import DemoFuncReduxToolkit from './screens/reduxtoolkit/DemoFuncReduxToolkit'
import DemoHook from './screens/demohook/DemoHook'
import Main from './screens/shoes/Main'
import Detail from './screens/shoes/component/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator();
export default function App() {
  return ( 
    <NavigationContainer> 
    <Stack.Navigator initialRouteName='home'>
      {/*  name: tên  của màn hình được tạo trong Navigation Container
           component: Giao diện sẽ được hiển thị lên màn hình
            */} 
      <Stack.Screen name="home" component={Main} options={{ title: 'HOME' }} />     
      <Stack.Screen name="detail" component={Detail} options={{ title: 'DETAIL' }} />
    </Stack.Navigator> 
    </NavigationContainer> 

  )
}