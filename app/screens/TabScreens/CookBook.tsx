import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FetchData } from '../../../services/Firebase';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { screens } from '../screenNames/screenNames';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRootProps } from '../navigators/Starting';
import Myloader from '../../components/loader';



const CookBook = () => {

  const Navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();
  const [recipieData, setrecipieData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loader,setLoader] = useState<boolean>(false);
  const onTab = useIsFocused();

  const GetData = async () => {
    setLoader(true);
    const data = await FetchData();
    console.log('MYDATA', data);
    setrecipieData(data);
    setLoader(false);
  };

  useEffect(() => {
    GetData();
  },[onTab]);

  console.log(recipieData);

  const refreData = async () => {
    setLoading(true);
     await GetData();
    setLoading(false);
  };

  return (
    <View>
      <Myloader visible={loader} />
      {
        recipieData.length === 0 ?
        <View style={styles.noItemContainer}>
          <Text style={styles.noItemText}>
            No Item Found
          </Text>
        </View>
        :
      <FlatList
        data={recipieData}
        numColumns={2}
        refreshing={loading}
        onRefresh={refreData}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Navigation.navigate(screens.Detail, { recipeData: JSON.stringify(item) })}
            style={styles.container}>
            <Image
              source={require('../../../assets/detailimg.png')}
              style={styles.image}
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.gradient}
            >
              <Text style={styles.name}>{item.recipeName}</Text>
            </LinearGradient>
          </TouchableOpacity>

        )}
      />
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 200,
    margin: 10,
    padding: 5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noItemContainer:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  noItemText:{
    fontSize:50,
  },
});
export default CookBook;
