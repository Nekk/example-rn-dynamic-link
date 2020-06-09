import React, { Component, useEffect } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Images } from '../Themes'
import dynamicEventLink from './dynamicEventLink'
// Styles 
import styles from './Styles/LaunchScreenStyles'
import firebase from 'react-native-firebase'

export const LaunchScreen = () => {
  useEffect(() => {
    // console.log("useEffect")
    // firebase.links().getInitialLink()
    // .then(url => {
    //   alert("initial link: ", url)
    // })
    const unsubscribe = firebase.links().onLink(url => {
      console.log(url, "url")
      console.log("openn")
    })

    return () => {unsubscribe()}
  },[])

  return (
    <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <Button title="Dynamic link with parameter 1" onPress={() => dynamicEventLink(1)}></Button>
      <Button title="Dynamic link with parameter 2" onPress={() => dynamicEventLink(2)}></Button>
      <Button title="Dynamic link with parameter 3" onPress={() => dynamicEventLink(3)}></Button>
    </View>
  )
}
