import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import Categories from './components/Categories'
import Menu from './components/Menu'
import styles from './styles/styles'

export default function MainMenu() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories />
      <Menu />

    </SafeAreaView>
  )
}