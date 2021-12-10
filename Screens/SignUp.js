import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import CheckBox from 'react-native-check-box'
import auth from '@react-native-firebase/auth';
import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '618399894306-98uknqqd4b6pfm9u4130irgu4c4b79va.apps.googleusercontent.com',
  });

export default class SignUp extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: '',
            userName:'',
            isChecked:false
        };

        auth().onAuthStateChanged((user) => {
            if (user) {
              console.log('User Name: ', user.displayName);
            }
          });
    }
    
    registerUser=()=>{
        auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((createdUser) => {
      createdUser.user.updateProfile({
          displayName:this.state.userName
      })
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }

    onGoogleButtonPress = async() => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential);
        console.log((await user.displayName).user.displayName);
        return 
        
      
      
      
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
                    label="Enter User name"
                    value={this.state.userName}
                    onChangeText={text => this.setState(
                        {userName: text}
                    )}
                    style={styles.input1}
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
                         this.registerUser();
                         this.props.navigation.navigate('SignIn');
                     }}
                     >
                     <Text style={{position:'relative',left:125,top:15,color:"white" }}>SIGN UP</Text>
                    </TouchableOpacity>


                    <Text>──────────────── Or ────────────────</Text>

                    <TouchableOpacity style={styles.neomorph41}>
                        <Text style={{position:'relative',left:110,top:15, color:"white" }}>Join LinkedIn</Text>
                    </TouchableOpacity>
                    
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this.onGoogleButtonPress}
                        
                        />
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