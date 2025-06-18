import { View, Text, StyleSheet } from 'react-native';
import MarqueeList from '../components/marqueeList';
import MyButton from '../components/MyButton';
import colors from '../../services/colors';
import { useNavigation } from '@react-navigation/native';
import { screens } from './screenNames/screenNames';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from './navigators/Starting';
import { useUser } from '../context/authcontext';



const imglist: number[] = [
  require('../../assets/1.jpg'),
  require('../../assets/2.jpg'),
  require('../../assets/3.jpg'),
  require('../../assets/4.jpg'),
  require('../../assets/5.jpg'),
  require('../../assets/6.jpg'),
  require('../../assets/c1.jpg'),
  require('../../assets/c2.jpg'),
  require('../../assets/c3.jpg'),

];



const Splash = () => {
const {user} = useUser();
  console.log(user);
  const Navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();

  return (
    <View style={styles.container}>
      <MarqueeList data={imglist} speed={2} />
      <MarqueeList data={imglist} speed={1.5} />
      <MarqueeList data={imglist} speed={1.7} />

      <View style={styles.cover}>
        <Text style={styles.title}>Cookmate AI 🧆🔎 | Find, Create & Enjoy Delicious Recipes!</Text>
        <Text style={styles.dis}>Generate Delicious Respies in seconds with the power of AI 🍔 ✨</Text>
        <MyButton title="SIGN IN" color="green" onpress={() =>
          {if(user != null){

              Navigation.replace(screens.HomeTabs);

          }
          else{
            Navigation.navigate(screens.Login);
          }}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
  },
  cover: {
    margin: 20,
    padding: 10,

  },
  title: {
    fontSize: 29,
    fontFamily: 'Outfit-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  dis: {
    fontSize: 17,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginBottom: 20,

  },
});

export default Splash;
