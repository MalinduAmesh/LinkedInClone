import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,alert,StyleSheet,TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

 const Post2 =()=> {

    const [imagePath,setImagePath] = React.useState('');
    const [imageName,setImageName] = React.useState('');
    const [userTopic,setUserTopic] = React.useState('');
    const [imageUrl,setImageUrl] = React.useState('');

    getImage = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            if(image){
                setImagePath(image.path);
                setImageName(image.modificationDate);
                uploadImages();
            }

          });
    }

    uploadImages = async () =>{
        const fileName =imageName;
        const reference = storage().ref(`images/${fileName}.jpg`);
        await reference.putFile(imagePath);
        setImageUrl(await storage().ref(`images/${fileName}.jpg`).getDownloadURL())
        console.log(imageUrl);
    }

    addUserPost = () =>{
        firestore()
            .collection('users')
            .add({
                url:imageUrl,
                userTopic:userTopic,
                like:'like',
                Comment:'comment',
                share:'share',
                send:'send'
            })
            .then((data) => {
                // console.log('Total users: ', querySnapshot.size);
                console.log('User Post Added !');
    });
    }

    
        return (
            <View style={styles.container}> 
            <View style={{ flex: 3/3,backgroundColor: "white"  }}>

            <TouchableOpacity style={styles.proImage}>
                   
                   <Text style={{color: 'blue',fontSize:19}} >Share post </Text>
       
                   </TouchableOpacity>

            <TouchableOpacity style={styles.proImage2} 
            onPress = {
                addUserPost
            }
            >
                   
            <Text style={{color: 'blue',fontSize:16}} >Post </Text>

            </TouchableOpacity>
            </View>


            <View style={{ flex: 5 }} >

                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="blue"
                        placeholder="What do you want to talk about?"
                        placeholderTextColor="black"
                        numberOfLines={10}
                        multiline={true}
                        value={userTopic}
                        onChangeText={userTopic=>{setUserTopic(userTopic)}}
                    />
            </View>
            
            <View style={{ flex: 7, backgroundColor:"white", 
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start', 
                                    alignItems: 'center', 
                                    height: 600 }} 
            >

                <View style = {styles.redbox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}
                onPress={getImage}
                >
                    <FontAwesome name="photo" size={27} style={{flex:1/9}}/>
                    <Text style={{flex:8/9,fontSize:16}}>Add a photo</Text>
                </TouchableOpacity>
                
                </View>

                <View style = {styles.bluebox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                <FontAwesome name="video-camera" size={27} style={{flex:1/9}} />
                <Text style={{flex:8/9,fontSize:16}}>Take a video</Text>
                </TouchableOpacity>
                </View>
                
                <View style = {styles.blackbox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                <Ionicons name="document-text" size={27} style={{flex:1/9}}/>
                <Text style={{flex:8/9,fontSize:16}}>Add a document</Text>
                </TouchableOpacity>
                </View>
  
                <View style = {styles.bluebox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                <MaterialIcons name="contact-page" size={29} style={{flex:1/9}}/>
                <Text style={{flex:8/9,fontSize:16}}>Find an expert</Text>
                </TouchableOpacity>
                </View>

                <View style = {styles.blackbox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                <FontAwesome name="shopping-bag" size={27} style={{flex:1/9}}/>
                <Text style={{flex:8/9,fontSize:16}}>Share that you're hiring</Text>
                </TouchableOpacity>
                </View>

                <View style = {styles.blackbox} >
                <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                <Octicons name="project" size={27} style={{flex:1/9}}/>
                <Text style={{flex:8/9,fontSize:16}}>Share that you're hiring</Text>
                </TouchableOpacity>
                </View>

            </View>
            </View>
        )
    }

export default Post2;

const styles = StyleSheet.create({
    container:{
        flex:1,
		backgroundColor:"#23252A",
    },
    proImage:{
        marginBottom:0,
        marginTop:20,
        left:29
    },
    proImage2:{
        position:'relative',
        marginBottom:40,
        marginTop:-30,
        left:340
    },
    textArea: {
        position:'relative',
        top:10,
        height: 250,
        // justifyContent: "flex-start",
        borderColor:'white',
        fontSize:20,
        backgroundColor:'white'
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderBottomWidth:1,
        // borderTopWidth:1
      },
      redbox: {
        width: 400,
        height: 50,
        padding:10
     },
     bluebox: {
        width: 400,
        height: 50,
        padding:10
     },
     blackbox: {
        width: 400,
        height: 50,
        padding:10
     },
})
