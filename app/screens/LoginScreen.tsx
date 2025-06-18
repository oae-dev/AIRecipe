import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import AuthTextField from '../components/TextField';
import MyButton from '../components/MyButton';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from './navigators/Starting';
import { screens } from './screenNames/screenNames';

const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginUser = () => {

    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        Alert.alert('succesfull');
        navigation.replace(screens.HomeTabs);
      })
      .catch(
        error => {
          if (error === 'auth/invalid-email') {
            Alert.alert('Invalid,email');
          }
          if (error === 'auth/wrong-password') {
            Alert.alert('wrong Password');
          }
          console.error(error);
        }
      );

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('../../assets/1.jpg')} style={styles.logo} />

        <View style={styles.fieds}>
          <AuthTextField value={email} onchange={setEmail} placeholder="Email" />
          <AuthTextField value={password} onchange={setPassword} placeholder="Password" />
        </View>

        <View style={styles.buttonWidth}>
          <MyButton title="Sign In" color="#7a7746" onpress={loginUser} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace(screens.SignUp)}>
          <Text>Don't have an account? Sign up</Text>

        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginScreen;
