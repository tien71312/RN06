import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData, menuData } from '../../../common/Contant'
import styles from '../styles/styles'
import { ICONS } from '../../../common/Images'

export default function Menu() {

  getNameCategoryById = (id) =>{
    //Lọc ra category data thoả điều kiện thông qua filter
    let listCategory = categoryData.filter(value => value.id == id)
    let categoryName = ""
    //duyệt qua danh sách category data đã được lọc
    listCategory.forEach(value => {
      categoryName += value.name
    })

    //Cách 2 lấy name category
    // categoryData.forEach(value => {
    //     if(value.id==id){
    //     categoryName = value.name
    //     }
    //   })
    
    return categoryName
  }

  renderItem = ({item}) =>(
    <TouchableOpacity
      style={styles.menu}
    >
      <View>
        <Image style={styles.menu__img} source={item.photo} />
        <View style={styles.menu__duration}>
          <Text>{item.duration}</Text>
        </View>
      </View>

      <Text style={styles.menu__title}>{item.name}</Text>

      <View style={[styles.menu__type,styles.mTop8]}>
        <Image style={styles.icon16} source={ICONS.star} />
        <Text style={styles.mLeft8}>{item.star}</Text>
        <Text style={styles.mLeft8}>{getNameCategoryById(item.categoryId)}</Text>
        <Text style={styles.mLeft8}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList 
      data={menuData}
      renderItem={renderItem}
    />
  )
}