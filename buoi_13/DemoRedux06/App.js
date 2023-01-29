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
import DemoFormMilk from './screens/demoformmilk/DemoFormMilk'
const Stack = createNativeStackNavigator();
export default function App() {
  return ( 
      <Provider store={store}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <DemoFormMilk />
          </View>
      </Provider>
  )
}