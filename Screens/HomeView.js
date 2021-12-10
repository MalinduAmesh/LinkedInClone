import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,alert,StyleSheet,FlatList} from 'react-native'
import { SearchBar } from 'react-native-elements';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

export default class HomeView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        const subscriber = firestore()
        .collection('users')
        .onSnapshot(querySnapshot => {
          const Users = [];
    
          querySnapshot.forEach(documentSnapshot => {
             
            Users.push({ 
                    userTopic:documentSnapshot.data().userTopic,
                    imageUrl:documentSnapshot.data().url,
                    key: documentSnapshot.id,
                })
            });
            this.setState({
                data:Users
            })
            console.log(this.imageUrl)
          });
    }

    render() {
        return (
            <View style={styles.container}> 
            <View style={{ flex: 3/3, backgroundColor: "white"}}>
            <TouchableOpacity style={styles.proImage} 
            onPress={()=>{
                
            }}>
                   <Image
                    style={{ width: 50, height: 50, borderRadius: 150 / 2 }}
                    source={require('../assets/IMG_6316.jpg')}
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


            <View style={{ flex: 10, backgroundColor: "white" }} >

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',padding:10}}>

                    <Image
                    style={{marginRight:300, width: 45, height: 45, borderRadius: 150 / 2 }}
                    source={require('../assets/user.png')}
                    />
                    <Text style={{position:'absolute',bottom:480}}>User ID: {item.key}</Text>
                    <Text style={{position:'absolute',bottom:456}}>Seneior software enginner</Text>
                    <Text  style={{marginRight:300 ,padding:10,fontSize:18}}>{item.userTopic}</Text>
                    <Image
                        style={{width: 350,height: 350}}
                        source={{uri: item.imageUrl}}/>
                  
                    <View style={{flex: 1,flexDirection:'row'}}> 
                    <TouchableOpacity style={styles.userButton}>

                    <Foundation name="like" size={27}style={{flex: 3, alignItems: 'flex-end', justifyContent: 'center'}}/>
                    <Text>like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userButton2}>
                    <MaterialIcons name="chat" size={27}style={{flex: 3, alignItems: 'flex-end', justifyContent: 'center'}}/>
                    <Text>like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userButton3}>
                    <MaterialCommunityIcons name="share-outline" size={27}style={{flex: 3, alignItems: 'flex-end', justifyContent: 'center'}}/>
                    <Text>like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userButton4}>
                    <FontAwesome name="send" size={19}style={{flex: 3, alignItems: 'flex-end', justifyContent: 'center',padding:6}}/>
                    <Text>like</Text>
                    </TouchableOpacity>
                    </View>

                    </View>
                )}
                    keyExtractor={item => item.id}
                />

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
    },
    userButton:{
        flex:1,
        alignItems:'center',
        width:100,
        // backgroundColor:'red',
        height:50
    },
    userButton2:{
        flex:1,
        alignItems:'center',
        width:100,
        // backgroundColor:'blue',
        height:50
    },
    userButton3:{
        flex:1,
        alignItems:'center',
        width:100,
        // backgroundColor:'green',
        height:50
    },
    userButton4:{
        flex:1,
        alignItems:'center',
        width:100,
        // backgroundColor:'pink',
        height:50
    }
})