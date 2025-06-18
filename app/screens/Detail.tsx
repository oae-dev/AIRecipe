import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import DetailIntro from '../components/DetailIntro';
import Ingredients from '../components/Ingredients';
import Steps from '../components/Steps';
import { AddData, DeleteFav, FetchData } from '../../services/Firebase';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackRootProps } from './navigators/Starting';



type DetailRouteProp = RouteProp<StackRootProps, 'Detail'>;

const Detail = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();
  const route = useRoute<DetailRouteProp>();
  const { recipeData } = route.params;
  console.log('On Detail Screen' + recipeData);
  const objectiveData = JSON.parse(recipeData);
  const [fav, setfav] = useState<boolean>(false);
  console.log('DETAIL OBJECTIVE DATA -', objectiveData);

  const [DataBaseRecipieData,setDatabaseRecipieData] = useState<any>(null);


  const GetData = async ()=>{
     const data = await FetchData();
     console.log('MYDATA',data);
     setDatabaseRecipieData(data);
    };

    useEffect(()=>{
      GetData();
    },[]);

    useEffect(() => {
  if (DataBaseRecipieData) {
    CheckFav();

  }
}, [DataBaseRecipieData]);

    const CheckFav = () => {
  const isFav = DataBaseRecipieData.some(
    (item: any) => item.recipeName === objectiveData.recipeName
  );
  setfav(isFav);
};

  return (

    <ScrollView style={styles.container}>
      <View>

          <TouchableOpacity
            onPress={() => Navigation.goBack()}

            style={styles.back}>
              <Image source={require('../../assets/back.png')} style={styles.backimg} />
            </TouchableOpacity>

        <Image source={require('../../assets/detailimg.png')}
          style={styles.screenImg} />
        {
          fav ?
            <TouchableOpacity
            onPress={()=>{
              setfav(!fav);
               DeleteFav(objectiveData.recipeName);
            }}

            style={styles.favicon}>
              <Image source={require('../../assets/i1.png')} style={styles.fabimg} />
            </TouchableOpacity>
            :
            <TouchableOpacity
            onPress={()=>{
              setfav(!fav);
              AddData(objectiveData);
            }}

            style={styles.nonfavicon}>
              <Image source={require('../../assets/i1.png')} style={styles.nonfavicon} />
            </TouchableOpacity>
        }
      </View>

      <DetailIntro recipeData={recipeData} />
      <Ingredients recipeData={recipeData} />
      <Steps steps={objectiveData.steps} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingBottom: 50,
  },
  favicon: {
    height: 70, width: 70,
    backgroundColor: 'green', position: 'absolute',
    bottom: 10, right: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabimg:{
    height: 40,
     width: 40,
  },
  nonfavImg:{
    height: 40,
    width: 40,
    tintColor:'white',
  },
  nonfavicon:{
    height: 70, width: 70,
    backgroundColor: 'gray', position: 'absolute',
    bottom: 10, right: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back:{
    height: 50, width: 50,
    backgroundColor: 'white', position: 'absolute',
    top: 10, left: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  elevation: 10,
  },
  backimg:{
    height: 40,
    width: 40,
  },
  screenImg:{

  },
});

export default Detail;
