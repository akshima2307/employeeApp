import React from 'react';  
import {TouchableOpacity, ImageBackground, StyleSheet,Text, TextInput , Image, KeyboardAvoidingView } from 'react-native';

export default function LogIn({navigation}) {
        let Image_Http_URL ={ uri: 'https://www.latestlaws.com/media/2019/05/delhi-high-court-logo.png'};  
        
        const pressHandler = () => {
            navigation.navigate('Home');
        }
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
                <ImageBackground style={styles.background}  source={require('./images/background1.jpeg')} style={styles.container} >
                        <Image style={styles.logo} source={Image_Http_URL}  />
                        <Text style={styles.heading} >WELCOME TO DELHI HIGH COURT</Text>
                        <TextInput 
                            style={styles.inputField}
                            placeholder = "Registered Number/Email id"
                        />
                        <TextInput 
                            style={styles.inputField}
                            placeholder = "password"
                        />
                        <TouchableOpacity onPress= {pressHandler} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Login</Text>
                        </TouchableOpacity>
                </ImageBackground>
            </KeyboardAvoidingView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
    },
    logo:{
        marginTop: 20,
        width: 190,
        height: 190
    },
    inputField:{
        backgroundColor: 'white',
        padding: 2,
        width: 250,
        height: 45,
        marginTop: 20,
        borderRadius: 5,
        padding: 15
    },
    heading: {
        height: 100,
        textAlignVertical: 'center',
        width: 290,
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        letterSpacing: 2.5,
        marginTop: 40,
        paddingHorizontal:12,
        borderRadius: 3
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#660000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
        width: 120,
        height: 45
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });

