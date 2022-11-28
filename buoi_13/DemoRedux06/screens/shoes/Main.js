import { View, Text,SafeAreaView } from 'react-native'
import React, { useEffect,useState  } from 'react'
import Appbar from './component/Appbar'
import Search from './component/Search'
import ListShoe from './component/ListShoe'
import styles from './styles/styles'

export default function Main() {
    // Hàm filter
    // Thư viện stagger https://github.com/Mindinventory/react-native-stagger-view
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getProduct = async () => {
      try {
       const response = await fetch('http://svcy3.myclass.vn/api/Product');
       const json = await response.json();
       setData(json.content);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }

    useEffect(()=>{
        //fetch data ở đây
        // api all http://svcy3.myclass.vn/swagger/index.html
        // api product http://svcy3.myclass.vn/api/Product 
        getProduct(); 
    },[]) 
   // console.log(data)
  return (
    <SafeAreaView style={styles.container}>
      <Appbar />
      <Search /> 
      <ListShoe data={data} isLoading={isLoading} />
    </SafeAreaView>
  )
}