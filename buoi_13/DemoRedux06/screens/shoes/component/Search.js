import { View, Text,Image,TextInput, TouchableOpacity } from 'react-native' 
import styles from '../styles/styles' 
//Phải sử dụng memo, callback
export default function Search(props) {
  // props.getSearch()
  // const key=props.key
  let keys=props.keysearch;
  const gets =()=>{
    //console.log(keys)
    props.getSearch(keys);
  } 
  return (
    <View>
      <Text style={styles.search_text}>Find Your</Text>
      <Text style={styles.search_text}>Dream Shoes</Text>
      <View style={styles.search}>
        <View style={styles.search_input}>
          <Image style={styles.icon30} source={require('../images/search.png')} />
          <TextInput style={{width:'90%'}} placeholder='Search Shoes...' onChangeText={(value)=>{keys=value}} ></TextInput>
        </View>
        <TouchableOpacity
          onPress={gets}  
        >
          <View style={styles.btn_icon}>
            <Image style={styles.icon30} source={require('../images/searchenter.png')} />
          </View>
        </TouchableOpacity>

      </View>
       <View style={{flexDirection:'row',marginLeft:20}}> 
          <Text>Có</Text>
          <Text style={{color:'red',fontWeight:'700'}}> {props.num}</Text>
          <Text> Kết quả</Text>  
          <Text style={{color:'green',fontWeight:'700'}}> {props.keysearch}</Text> 
        </View>
    </View>
  )
}