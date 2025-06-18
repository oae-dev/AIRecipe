
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../Splash';
import { screens } from '../screenNames/screenNames';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import { AuthcontextProvider } from '../../context/authcontext';
import TabHome from './TabHome';
import Detail from '../Detail';


export type StackRootProps = {
  Splash: undefined,
  Login: undefined,
  SignUp: undefined,
  HomeTabs: undefined
  Detail: { recipeData: string };
}

const Stack = createStackNavigator<StackRootProps>();

const Starting = () => {
  return (
    <AuthcontextProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={screens.Splash} component={Splash} />
          <Stack.Screen name={screens.Login} component={LoginScreen} />
          <Stack.Screen name={screens.SignUp} component={SignUpScreen} />
          <Stack.Screen name={screens.HomeTabs} component={TabHome} />
          <Stack.Screen name={screens.Detail} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthcontextProvider>
  );
};

export default Starting;
