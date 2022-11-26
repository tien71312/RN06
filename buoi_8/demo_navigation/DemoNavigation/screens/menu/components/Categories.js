import { View, Text, FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { categoryData } from '../../../common/Contant';

export default function Categories() {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList /> 
    </View>
  )
}

export const CategoriesList = () => {
    let currentCategory = 1;

    renderItem = ({item}) => (
        <TouchableOpacity
            style={[styles.categoryList, item.id == currentCategory ? styles.categoryList_selected : ""]}
        >
            <View style={[styles.categoryList__circle, item.id == currentCategory ? styles.categoryList__circle_selected : ""]}>
                <Image style={styles.icon} source={item.icon}/>
            </View>
            <Text style={[styles.categoryList__title,item.id == currentCategory ? styles.categoryList__title_selected : ""]}>{item.name}</Text>
        </TouchableOpacity>
    )

    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            renderItem={renderItem}
         />
    )
}