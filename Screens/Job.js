import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,alert,StyleSheet} from 'react-native'
import { SearchBar } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default class Job extends Component {
        constructor(props) {
            super(props)

            this.state = {
                
            }
        }


        signOut = ()=>{
            auth()
            .signOut()
            .then(() => {
                this.props.navigation.navigate('SignIn');
                console.log('User signed out!')});
        }
    render() {
        return (
            <View style={styles.container}> 
            <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
            <TouchableOpacity style={styles.proImage} 
            onPress={()=>{
                         this.props.navigation.navigate('SignIn');
                     }}>
                   <Image
                    style={{ width: 50, height: 50, borderRadius: 150 / 2 }}
                    source={require('../assets/user.png')}
                    />
            </TouchableOpacity>

            <SearchBar containerStyle={{position:'relative',left:73,bottom:38, height:10,width:240}}
                placeholder="Type Here..."
                lightTheme
                noIcon
                inputStyle={{margin: 0}}
                // onChangeText={this.updateSearch}
                // value={search}
            />
            <TouchableOpacity style={styles.proImage2}>
                   
                   <Image
                    style={{width: 35, height: 35, borderRadius: 150 / 2 }}
                    source={require('../assets/chatMessage.png')}
                    />

            </TouchableOpacity>
            </View>


            <View style={{ flex: 9, backgroundColor: "white" }} >
            <TouchableOpacity style={{width:100,height:50,backgroundColor: "red"}}
            onPress={this.signOut}
            >
            <Text>Sign Out</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:"#23252A",
    },
    proImage:{
        position:'relative',
        top:10,
        left:2
    },
    proImage2:{
        position:'relative',
        top:-49,
        bottom:200,
        left:340
    }
})
