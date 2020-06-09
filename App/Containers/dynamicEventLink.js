import firebase from 'react-native-firebase'
import React from 'react'
import {Clipboard, Alert} from "react-native"

const dynamicEventLink = async (number) => {
    console.log("number:", number)
    const link = new firebase.links.DynamicLink(`https://www.example.com/?generatednumber=${number}`,
    'https://rndynamiclink2.page.link')
    .android.setPackageName('com.dplus.rnDynamicLink')
    .ios.setBundleId('app_ios_bundle_id')
    

    const dynamicLink = await firebase.links().createShortDynamicLink(link,"UNGUESSABLE")

    console.log(dynamicLink,'link')
    Clipboard.setString(dynamicLink)
    Alert.alert('Link copied to your clipboard.')

    return dynamicLink
}

export default dynamicEventLink