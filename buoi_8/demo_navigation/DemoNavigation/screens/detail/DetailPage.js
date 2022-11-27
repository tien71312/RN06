import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './components/Appbar'
import Description from './components/Description'
import Order from './components/Order'
import { useRoute } from '@react-navigation/native'

export default function DetailPage() {
    const route = useRoute()
    const params = route.params
  return (
    <SafeAreaView style={styles.container}>
        <AppBar />
        <Description 
            img={params.item.photo} 
            title={params.item.name} 
            price={params.item.price} 
            desc={params.item.description} 
            calo={params.item.calories} />
        <Order />
    </SafeAreaView>
  )
}