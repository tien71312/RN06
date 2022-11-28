import { View, Text } from 'react-native'
import React from 'react'
import DemoRedux from './screens/redux/DemoRedux'
import { Provider } from 'react-redux'
import { store } from './store'
import DemoFuncRedux from './screens/redux/DemoFuncRedux'
import DemoFuncReduxToolkit from './screens/reduxtoolkit/DemoFuncReduxToolkit'
import DemoHook from './screens/demohook/DemoHook'

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <DemoHook />
      </View> 
    </Provider>

  )
}