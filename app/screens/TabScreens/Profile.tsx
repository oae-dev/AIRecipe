import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyButton from '../../components/MyButton';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from '../navigators/Starting';
import { screens } from '../screenNames/screenNames';

const Profile = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();
  return (
    <View style={style.container}>

      <MyButton color="red" title="Sign Out" onpress={() => { signOut(getAuth()); Navigation.replace(screens.Splash); }} />
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Profile;
