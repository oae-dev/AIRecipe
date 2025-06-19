import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ToastAndroid, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import AuthTextField from '../components/TextField';
import MyButton from '../components/MyButton';
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from './navigators/Starting';
import { screens } from './screenNames/screenNames';
import { styles } from './LoginScreen';
import MyModal from '../components/MyModal';

const SignUpScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [wrongEmail, setwrongEmail] = useState<boolean>(false);
  const [wrongPassword, setwrongPassword] = useState<boolean>(false);
  const [modal, setmodal] = useState<boolean>(false);
  const [myerror,setMyError] = useState<string | null > (null)

  const createUser = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {ToastAndroid.show('SignUp Successfuly', ToastAndroid.SHORT)
        navigation.replace(screens.HomeTabs)
      })
      .catch(
        error => {
          if (error.code === 'auth/email-already-in-use') {
            setwrongEmail(true)
            setwrongPassword(true)
            setMyError('auth/email-already-in-use')
            ToastAndroid.show('Already Exits', ToastAndroid.SHORT);
          }
          if (error.code === 'auth/invalid-email') {
            setwrongEmail(true)
            setwrongPassword(true)
            setMyError('auth/invalid-email')
            console.log('That email address is invalid!');
          }
          if ( error.code === 'auth/weak-password') {
            setwrongPassword(true)
            setMyError('auth/weak-password')
            ToastAndroid.show('Week Password', ToastAndroid.SHORT);
          }

          console.error(error);
        });
  };

  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}>

    <View style={styles.container}>
      <Image source={require('../../assets/1.jpg')} style={styles.logo} />

      <View style={styles.fieds}>
        <View>
          <AuthTextField value={email} onchange={setEmail} placeholder="Email" correctData={wrongEmail} 
          changeOnFoucs={()=>{setwrongEmail(false);
                setwrongPassword(false);
                setMyError(null)
            }} />
          {
            myerror === 'auth/email-already-in-use' ? <Text style={styles.wrongText}>User Already Exist</Text> : null
          }
          {
            myerror === 'auth/invalid-email' ? <Text style={styles.wrongText}>Enter Valid Email</Text> : null
          }
        </View>
        <View>
          <AuthTextField value={password} onchange={setPassword} placeholder="Password" correctData={wrongPassword} 
          changeOnFoucs={()=>{setwrongEmail(false);
                setwrongPassword(false);
                setMyError(null)
            }} />
          {
            myerror === 'auth/weak-password' ? <Text style={styles.wrongText}>Password should be at least 6 characters </Text> : null
          }
        </View>
      </View>

      {
          password == '' || email == '' ?
            <View style={styles.buttonWidth}>
              <MyButton title="Sign Up" color="#7a7746" onpress={() => setmodal(true)} />
            </View>
            :
            <View style={styles.buttonWidth}>
              <MyButton title="Sign Up" color={wrongPassword ? 'red' : '#7a7746'} onpress={createUser} />
            </View>

        }
      <TouchableOpacity
        onPress={() => navigation.replace(screens.Login)}>
        <Text>SignIn with email & email</Text>
      </TouchableOpacity>
      <MyModal visiblility={modal} setVisibility={setmodal} />
    </View>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     gap: 20,
//     alignItems: 'center',

//   },
//   logo: {
//     height: 100,
//     width: 100,
//   },
//   btnwidth: {
//     width: '80%',
//   },
// });

export default SignUpScreen;
