import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Ingredients = ({ recipeData }: any) => {

  console.log('In Ingredients' + recipeData);
  const RecipeDataObject = JSON.parse(recipeData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Ingredients</Text>
        <Text style={styles.heading}>{RecipeDataObject.ingredients.length}  items</Text>
      </View>
      <View>
        {
          RecipeDataObject.ingredients.map((item: any, index: string) => {
            return (
              <View key={index} style={styles.datacontainer}>
                <View style={styles.ingredientName}>
                  <Text style={styles.icon}>{item.icon}</Text>
                  <Text  style={styles.ingredient}>
                    {item.ingredient}
                  </Text>
                </View>
                <View>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                </View>
              </View>
            );
          })
        }
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    marginTop: 10,
  },
  icon:{
    margin:5,
    fontSize:20,
  },
  ingredient:{
    fontSize:20,
  },
  quantity:{
    fontSize:19,
    color:'gray',
  },
  datacontainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:5,
  },
  ingredientName:{
    flexDirection:'row',
  },
});
export default Ingredients;
