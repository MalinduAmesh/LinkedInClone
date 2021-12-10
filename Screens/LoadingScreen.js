import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'

export default class LoadingScreen extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/LoadingS.png')}
                    />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    tinyLogo: {
        position:'relative',
        width: 400,
        height:740
      },
})