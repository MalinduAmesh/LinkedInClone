import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Alert } from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import CheckBox from 'react-native-check-box'
import auth from '@react-native-firebase/auth';

export default class GoogleSignIn extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: '',
            userName:'',
            isChecked:false
        };

    }
    userLogin = () => {
        
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
                     onPress={()=>{
                         this.userLogin();
                        //  this.props.navigation.navigate('');
                     }}
                     >
                     <Text style={{position:'relative',left:125,top:15,color:"white" }}>Continue</Text>
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