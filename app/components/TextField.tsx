import { TextInput, StyleSheet, View } from 'react-native';
import React from 'react';

type AuthTextFieldprops = {
    value: string
    onchange: (text: string) => void
    placeholder: string
    correctData: boolean
    changeOnFoucs: ()=> void
}

const AuthTextField = ({ value, onchange, placeholder, correctData, changeOnFoucs}: AuthTextFieldprops) => {
    return (
        <View>
            <TextInput
            value={value}
            placeholder={placeholder}
            style={[styles.outer,correctData ? styles.wrongOuterColor : styles.fineOuterColor  ]}
            onChangeText={onchange}
            onFocus={changeOnFoucs}/>

        </View>

    );
};

const styles = StyleSheet.create({
    outer: {
        borderWidth: 2,
        height: 45,
        borderRadius: 10,
    },
    fineOuterColor:{
        borderColor: '#adadad',
    },
    wrongOuterColor:{
        borderColor: 'red',
    },
    wrongText:{
        color: 'red',
    },
});

export default AuthTextField;
