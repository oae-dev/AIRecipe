import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import colors from '../../services/colors';
import MyButton from './MyButton';
import ModalAI from '../../services/gemApi';
import { GENERATE_COMPLETE_RECIPE_PROMPT, GENERATE_OPTION_RECIPE_PROMPT } from '../../services/propmts';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Myloader from './loader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { screens } from '../screens/screenNames/screenNames';
import { StackRootProps } from '../screens/navigators/Starting';




type GenrateRecipiesPropsType = {
  veg: boolean
}


const GenrateRecipies = ({ veg }: GenrateRecipiesPropsType) => {
  const Navigation = useNavigation<NativeStackNavigationProp<StackRootProps>>();
  const [search, setSearch] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const ActionSheetref = useRef<ActionSheetRef>(null);
  const [recipieContent, setRecippieContent] = useState<any>(null);
  const [myLoadershow, setmyLoadershow] = useState<boolean>(false);


  const vegitarian = veg ? 'vegitarian' : 'non-Vegitarian';


  const genrateRecipies = async (input: string | undefined) => {
    setLoading(true);
    if (search === '') {
      console.log('enter something');
    }
    try {
      const result = await ModalAI(`${input},${vegitarian}\n${GENERATE_OPTION_RECIPE_PROMPT}`);
      const stringResult = result?.choices?.[0]?.message?.content;
      const parsedResult = JSON.parse(stringResult);

      console.log('✅', parsedResult);
      setRecippieContent(parsedResult);
      ActionSheetref.current?.show();


      setLoading(false);
    } catch (error: any) {
      console.error('❌ AI Error:', error?.response?.data || error.message || error);
      setLoading(false);
    }
  };


  const GetFullDetailRecipie = async (item: any) => {
    ActionSheetref.current?.hide();
    setmyLoadershow(true);
    const MyPrompt = `Recipie Name:${item.recipeName} and discription:${item.description} ${GENERATE_COMPLETE_RECIPE_PROMPT}`;
    const result = await ModalAI(MyPrompt);
    const stringResult = result?.choices?.[0]?.message?.content;
    const parsedResult = JSON.parse(stringResult);

    console.log('✅', parsedResult);
    console.log('✅', JSON.stringify(parsedResult));


    setmyLoadershow(false);
    Navigation.push(screens.Detail, { recipeData: stringResult });

  };



  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pan.gif')} style={styles.img} />
      <Text style={styles.heading}>Warm up your stove, and let's get cooking!</Text>
      <Text style={styles.dis}>Make someting for your LOVE</Text>
      <TextInput placeholder="What you want to create? Add Ingredients etc."
        onChangeText={(text) => setSearch(text)}
        value={search}
        multiline
        numberOfLines={3}
        style={styles.search}
      />
      <View style={styles.btn}>
        <MyButton title={loading ? 'Loading...' : 'Genrate Recipe'} color="green" onpress={() => genrateRecipies(search)} />
      </View>

      <ActionSheet ref={ActionSheetref}>
        <View>
          <Text style={styles.ActionSheetHeading}>Select Recipies</Text>
          <View style={styles.divider} />
          <FlatList data={recipieContent?.recipes}
            renderItem={({ item }: any) => (
              <TouchableOpacity style={styles.recipieContainer}
                onPress={() => GetFullDetailRecipie(item)}
              >
                <Text style={styles.RecipieHeading}>{item.recipeName}</Text>
                <Text style={styles.recipieDis}>{item.description}</Text>
              </TouchableOpacity>
            )} />
        </View>
      </ActionSheet>
      <Myloader visible={myLoadershow} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.genraterbg,
  },
  img: {
    height: 100,
    width: 100,
  },
  heading: {
    fontSize: 23,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    margin: 5,
  },
  dis: {
    fontSize: 16,
    fontWeight: '500',
  },
  search: {
    height: 110,
    backgroundColor: colors.White,
    borderRadius: 15,
    width: '100%',
    marginTop: 20,
    padding: 15,
    textAlignVertical: 'top',
    fontSize: 17,
  },
  ActionSheetHeading: {
    padding: 25,
    paddingBottom: 3,
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
  recipieContainer: {
    margin: 10,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 6,
    padding: 10,
  },
  RecipieHeading: {
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  recipieDis: {
    fontSize: 16,
    color: colors.discription,
    fontFamily: 'Outfit-Regular',
  },
  btn: {
    marginTop:10,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
    width: 50, marginBottom: 6,
    alignSelf: 'center',
  },

});

export default GenrateRecipies;
