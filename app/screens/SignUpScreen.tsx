import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AuthTextField from '../components/TextField';
import MyButton from '../components/MyButton';
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from './navigators/Starting';
import { screens } from './screenNames/screenNames';

const SignUpScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const createUser = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => Alert.alert('Succesfully Account created'))
      .catch(
        error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Already Exits');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <AuthTextField value={email} onchange={setEmail} placeholder="Email" />
      <AuthTextField value={password} onchange={setPassword} placeholder="Password" />
      <View style={styles.btnwidth}>
        <MyButton title="Sign Up" color="#7a7746" onpress={createUser} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace(screens.Login)}>
        <Text>SignIn with email & email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',

  },
  logo: {
    height: 100,
    width: 100,
  },
  btnwidth: {
    width: '80%',
  },
});

export default SignUpScreen;
