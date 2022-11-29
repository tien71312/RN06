import { View, Text,SafeAreaView } from 'react-native'
import React, { useCallback, useEffect,useState  } from 'react'
import Appbar from './component/Appbar'
import Search from './component/Search'
import ListShoe from './component/ListShoe'
import styles from './styles/styles'
import { Provider } from 'react-redux'
import { store } from '../../store' 

 
export default function Main() {

    // Hàm filter
    // Thư viện stagger https://github.com/Mindinventory/react-native-stagger-view
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [keysearch, setKeysearch] = useState('');
    const getProduct = async () => {
      try {
        console.log(keysearch)
       const response = await fetch('http://svcy3.myclass.vn/api/Product?keyword='+keysearch);
       const json = await response.json();
       setData(json.content);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }

   const getSearch=(keysearch)=>{
    // dùng isNumber hoặc stypeof để check là chuỗi hay số
    setKeysearch(keysearch) 

  }
  const callBackgetSearch=useCallback(getSearch,[keysearch])


    useEffect(()=>{
        //fetch data ở đây
        // api all http://svcy3.myclass.vn/swagger/index.html
        // api product http://svcy3.myclass.vn/api/Product 
        getProduct(); 
        console.log('use effect')
    },[keysearch]) 
   // console.log(data)
  return (
    <Provider store={store}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <SafeAreaView style={styles.container}>
          <Appbar />   
          <Search num={data.length} keysearch={keysearch} getSearch={callBackgetSearch} /> 
          <ListShoe data={data} isLoading={isLoading} />
        </SafeAreaView>
    </View> 
    </Provider>
  )
}