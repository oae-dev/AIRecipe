import {StyleSheet } from 'react-native';
import React, {useState } from 'react';
import HomeHeader from '../../components/HomeHeader';
import colors from '../../../services/colors';
import GenrateRecipies from '../../components/GenrateRecipies';
import { ScrollView } from 'react-native-gesture-handler';
import Categaries from '../../components/Categaries';


const Home = () => {

  const [veg,setveg] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>

      {/* HomeHeader */}
      <HomeHeader veg={veg} setveg={setveg}/>
      {/* Resipies genrateer */}
      <GenrateRecipies veg={veg}/>
      {/* catagories */}
      <Categaries />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor: colors.Primary,
  },
});

export default Home;
