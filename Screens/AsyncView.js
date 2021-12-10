import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import CheckBox from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncView extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: '',
            userName:'',
            isChecked:false
        };

    }
    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('name', 'yasindu')
          console.log('====================================');
          console.log('Data save');
          console.log('====================================');
        } catch (e) {
          // saving error
        }
      }

      getData = async () => {
        try {
          const value = await AsyncStorage.getItem('name')
          if(value !== null) {
        console.log('====================================');
        console.log(value);
        console.log('====================================');
          }
        } catch(e) {
          // error reading value
        }
      }

      removeValue = async () => {
        try {
          await AsyncStorage.removeItem('name')
          console.log('====================================');
          console.log('Done');
          console.log('====================================');
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }
getData1(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
}
    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
                <TextInput
                    label="Email address or phone number"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        {email:text}
                    )}
                    style={styles.input}
                />
                
                 <TextInput
                    label="Enter Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        {password: text}
                    )}
                    style={styles.input1}
                />

                <CheckBox
                style={styles.checkBox}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                    }}
                    isChecked={this.state.isChecked}
                    leftText={"CheckBox"}
                    
                />

                <Text style={styles.RememberText}>Remember me. Learn More</Text>

                <TouchableOpacity style={styles.neomorph41}
                     onPress={this.storeData.bind(this)}
                     >
                     <Text style={{position:'relative',left:125,top:15,color:"white" }}>SIGN UP</Text>
                    </TouchableOpacity>


                    <Text>──────────────── Or ────────────────</Text>

                    <TouchableOpacity style={styles.neomorph41}
                    onPress={this.getData.bind(this)}
                    >
                        <Text style={{position:'relative',left:110,top:15, color:"white" }}>Join LinkedIn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.neomorph41}
                    onPress={this.removeValue.bind(this)}
                    >
                        <Text style={{position:'relative',left:110,top:15, color:"white" }}>Join LinkedIn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.neomorph41}
                    onPress={this.getData1.bind(this)}
                    >
                        <Text style={{position:'relative',left:110,top:15, color:"white" }}>Join LinkedIn</Text>
                    </TouchableOpacity>

                    </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems:'center'
    },
    input:{
        width:350,
        marginTop:120,
        height:55
    },   
    input1:{
        width:350,
        marginTop:20,
        height:55
    }, 
    neomorph41: {
        marginTop:20,
        marginBottom:30,
        borderRadius: 60,
        backgroundColor: '#095587',
        width: 300,
        height: 50,
      },
      checkBox:{
        padding: 0,
        marginRight:310,
        marginTop:30,

      },
      RememberText:{
          position:'relative',
          bottom:27,
          right:34,
          color:'grey'
      }
})