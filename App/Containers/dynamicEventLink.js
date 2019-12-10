import firebase from 'react-native-firebase'

const dynamicEventLink = async (number) => {
    console.log("number:", number)
    const link = new firebase.links.DynamicLink(encodeURI(`https://www.example.com/?generatednumber=${number}`),
    'https://rndynamiclink2.page.link')
    .android.setPackageName('com.dplus.rnDynamicLink')
    .ios.setBundleId('app_ios_bundle_id')
    

    const dynamicLink = await firebase.links().createShortDynamicLink(link,"SHORT")
    .then((url) => {
        const decodedURI = decodeURI(url)
        console.log("url: ", url)
        console.log("decoded url: ", decodedURI)
        // has the same value

    })

    return dynamicLink
}

export default dynamicEventLink