import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Stacknavigation from '../Navigations/Stacknavigation'

const HomeScreen = () => {
  return (
    <>
    <NavigationContainer>
        <Stacknavigation/>
    </NavigationContainer>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})