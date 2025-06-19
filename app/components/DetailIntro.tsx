/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../../services/colors';



const DetailIntro = ({ recipeData }: any) => {
    console.log('In DetailIntro' + recipeData);
    const RecipeDataObject = JSON.parse(recipeData);
    return (
        <View>
            <Text style={style.heading}>{RecipeDataObject?.recipeName}</Text>
            <Text style={style.title}>Description</Text>
            <Text style={style.discription}>{RecipeDataObject?.description}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={style.inforaper}>
                    <Image source={require('../../assets/icons/leaf.png')} style={style.infoimg} />
                    <View>
                        <Text style={style.info}>{RecipeDataObject?.calories} Cal</Text>
                        <Text style={style.infoDis}>Calories</Text>
                    </View>
                </View>

                <View style={style.inforaper}>
                    <Image source={require('../../assets/icons/timer.png')} style={style.infoimg} />
                    <View>
                        <Text style={style.info}>{RecipeDataObject?.cookTime} Min</Text>
                        <Text style={style.infoDis}>Timer</Text>
                    </View>
                </View>

                <View style={style.inforaper}>
                    <Image source={require('../../assets/icons/serve.png')} style={style.infoimg} />
                    <View>
                        <Text style={style.info}>{RecipeDataObject?.serveTo} Serve</Text>
                        <Text style={style.infoDis}>serveTo</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};


const style = StyleSheet.create({
    heading: {
        fontFamily: 'Outfit-Bold',
        fontSize: 30,
        marginTop: 20,
    },
    title: {
        fontFamily: 'Outfit-Bold',
        fontSize: 20,
        marginTop: 10,
    },
    discription: {
        color: colors.discription,
        fontSize: 20,
        fontFamily: 'Outfit-Regular',

    },
    inforaper: {
        backgroundColor: '#cedbbd',
        flexDirection: 'row', alignItems: 'center', padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    info: {
        color: 'green',
        fontFamily: 'Outfit-Bold',
        fontSize: 17,
        marginTop: 5,
        marginStart: 10,
    },
    infoDis: {
        marginStart: 12,
        fontSize: 15,
        fontWeight: '500',
    },
    infoimg: {
        height: 30,
        width: 30,
        tintColor: 'green',
    },
});
export default DetailIntro;
