import {FlatList, StyleSheet } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import colors from '../../../services/colors';
import GenrateRecipies from '../../components/GenrateRecipies';
import { ScrollView } from 'react-native-gesture-handler';
import Categaries from '../../components/Categaries';


const Home = () => {



  return (
    <FlatList data={[]}
    style={styles.container}
    ListHeaderComponent={
       <ScrollView>

      {/* HomeHeader */}
      <HomeHeader/>
      {/* Resipies genrateer */}
      <GenrateRecipies/>
      {/* catagories */}
      <Categaries />

    </ScrollView>
    }
    renderItem={null}
    />

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
