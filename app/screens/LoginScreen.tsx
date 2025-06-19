import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import AuthTextField from '../components/TextField';
import MyButton from '../components/MyButton';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRootProps } from './navigators/Starting';
import { screens } from './screenNames/screenNames';
import MyModal from '../components/MyModal';

const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [wrongEmail, setwrongEmail] = useState<boolean>(false);
  const [wrongPassword, setwrongPassword] = useState<boolean>(false);
  const [modal, setmodal] = useState<boolean>(false);

  const loginUser = () => {
    Keyboard.dismiss();
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT);
        navigation.replace(screens.HomeTabs);
      })
      .catch(
        (error) => {
          console.error(error);
          if (error?.code === 'auth/invalid-email') {
            setwrongEmail(true);
            setwrongPassword(true);
            ToastAndroid.show('Please Enter Valid Email & Password', ToastAndroid.SHORT);
          }
          if (error?.code === 'auth/wrong-password') {
            setwrongPassword(true);
          }
          if (error?.code === 'auth/invalid-credential') {
            setwrongEmail(true);
            setwrongPassword(true);
            ToastAndroid.show('Please Fill Correct Information', ToastAndroid.SHORT);
          }

        }
      );
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('../../assets/Images/Splash/1.jpg')} style={styles.logo} />

        <View style={styles.fieds}>
          <View>
            <AuthTextField value={email} onchange={setEmail} placeholder="Email"
            correctData={wrongEmail} changeOnFoucs={() => {
              setwrongEmail(false);
              setwrongPassword(false);
            }} />
            {
              wrongEmail ? <Text style={styles.wrongText}>Worng Email</Text> : null
            }
          </View>
          <View>
            <AuthTextField value={password} onchange={setPassword} placeholder="Password"
            correctData={wrongPassword} changeOnFoucs={() => {
              setwrongEmail(false);
              setwrongPassword(false);
            }} />
            {
              wrongPassword ? <Text style={styles.wrongText}>Worng Password</Text> : null
            }
          </View>
        </View>
        {
          password === '' || email === '' ?
            <View style={styles.buttonWidth}>
              <MyButton title="Sign In" color="#7a7746" onpress={() => setmodal(true)} />
            </View>
            :
            <View style={styles.buttonWidth}>
              <MyButton title="Sign In" color={wrongPassword ? 'red' : '#7a7746'} onpress={loginUser} />
            </View>

        }


        <TouchableOpacity
          onPress={() => navigation.replace(screens.SignUp)}>
          <Text>Don't have an account? Sign up</Text>

        </TouchableOpacity>

        <MyModal visiblility={modal} setVisibility={setmodal} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',

  },
  logo: {
    height: 150, width: 200,
    borderRadius: 30,
  },
  fieds: {
    width: '90%',
    justifyContent: 'space-between',
    gap: 20,
  },
  buttonWidth: {
    width: '80%',
  },
  wrongText: {
    color: 'red',
  },
});

export default LoginScreen;
