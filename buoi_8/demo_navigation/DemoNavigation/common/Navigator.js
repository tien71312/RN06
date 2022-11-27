export const StackNavigator =()=>(
        <Stack.Navigator initialRouteName='home' screenOptions={{
            headerShown:false,
            tabBarShowLabel:false
        }}>
          {/*  name: tên  của màn hình được tạo trong Navigation Container
               component: Giao diện sẽ được hiển thị lên màn hình
                */}
          <Stack.Screen name="home" component={BottomAppBarNavigator} />
          <Stack.Screen name="detail" component={DetailPage} />
        </Stack.Navigator>

)

