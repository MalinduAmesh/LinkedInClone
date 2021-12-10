import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class StartUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
        "https://firebasestorage.googleapis.com/v0/b/linkedinmaglevclone.appspot.com/o/startup1.png?alt=media&token=1ab54e61-a455-4bc6-91aa-7ed64ba918a8",
        "https://firebasestorage.googleapis.com/v0/b/linkedinmaglevclone.appspot.com/o/startup2.png?alt=media&token=0c2392d2-d35d-4e1d-bf17-e56d26478ee2",
        "https://firebasestorage.googleapis.com/v0/b/linkedinmaglevclone.appspot.com/o/startup3.png?alt=media&token=6aeb8949-c51d-4eb7-8ddd-ad3b2027682d"    
        ]
        };
      }
      onLayout = e => {
        this.setState({
          width: e.nativeEvent.layout.width
        });
      };
      
      render() {
        return (
            <View style={styles.container}>
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={this.state.width}
                autoplay
                circleLoop
                dotColor="#95a5a6"
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{borderRadius: 0, width: '75%',height:'71%', marginTop: 110}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    bottom:40,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                
            />
                     <TouchableOpacity rounded style={styles.neomorph41}
                     onPress={()=>{
                         this.props.navigation.navigate('SignUp');
                     }}
                     >
                     <Text style={{ color:"white" }}>SIGN UP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rounded style={styles.neomorph412}
                     onPress={()=>{
                         this.props.navigation.navigate('SignIn');
                     }}
                     >
                     <Text style={{ color:"white" }}>Join In</Text>
                    </TouchableOpacity>
            </View>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
        position:'relative',
        // top:200,
      },
      neomorph41: {
		marginLeft:25,
        marginRight:25,
		marginTop:20,
        marginBottom:-50,
        bottom:0,
	
		borderRadius: 40,
		shadowRadius: 80,
		// swapShadows:10,

		backgroundColor: '#0370B8',
	
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 8, height: 5 },
	
	
	  },
    neomorph412: {
      marginLeft:25,
          marginRight:25,
      marginTop:20,
          marginBottom:-50,
          top:60,
    
      borderRadius: 40,
      shadowRadius: 80,
      // swapShadows:10,
  
      backgroundColor: '#0370B8',
    
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: { width: 8, height: 5 },
    
    
      },
})
