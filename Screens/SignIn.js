import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Alert } from 'react-native'
import { TextInput,Button  } from 'react-native-paper';
import CheckBox from 'react-native-check-box'
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '618399894306-98uknqqd4b6pfm9u4130irgu4c4b79va.apps.googleusercontent.com',
});

export default class SignIn extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: '',
            userName:'',
            isChecked:false
        };

        const user = auth().currentUser;

        if (user) {
         console.log('User email: ', user.email);
        }

    }
    userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('TabNavigator')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }
      // onGoogleButtonPress = async() => {
      //   // Get the users ID token
      //   const { idToken } = await GoogleSignin.signIn();
      
      //   // Create a Google credential with the token
      //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      //   // Sign-in the user with the credential
      //   auth().signInWithCredential(googleCredential);
      //   console.log((await user.displayName).user.displayName);
      //   return 
        

      //      }
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
                        //  this.props.navigation.navigate('HomeView');
                     }}
                     >
                     <Text style={{position:'relative',left:125,top:15,color:"white" }}>Continue</Text>
                    </TouchableOpacity>

                    {/* <GoogleSigninButton
                      style={{ width: 192, height: 48 }}
                      size={GoogleSigninButton.Size.Wide}
                      color={GoogleSigninButton.Color.Dark}
                      onPress={this.onGoogleButtonPress}
                    />; */}

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