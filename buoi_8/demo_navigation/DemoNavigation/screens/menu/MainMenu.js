import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AppBar from './components/AppBar'
import Categories from './components/Categories'
import Menu from './components/Menu'
import styles from './styles/styles'
import { menuData } from '../../common/Contant'

export default function MainMenu() {
  //Hook => bắt đầu bằng use và chỉ sử dụng trong function component
  const [categorySelected,setCategorySelected] = useState(1)
  let listMenu = menuData.filter(value => value.categoryId == categorySelected)

  _onSelectedCategory = (id) => {
    setCategorySelected(id) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories onSelectedCategory={_onSelectedCategory} categorySelected={categorySelected} />
      <Menu data={listMenu} />
    </SafeAreaView>
  )
}
