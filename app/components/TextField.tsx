import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

type AuthTextFieldprops = {
    value: string
    onchange: (text: string) => void
    placeholder: string
}

const AuthTextField = ({ value, onchange, placeholder }: AuthTextFieldprops) => {
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            style={styles.outer}
            onChangeText={onchange} />
    );
};

const styles = StyleSheet.create({
    outer: {
        borderWidth: 2,
        height: 45,
        borderColor: '#adadad',
        borderRadius: 10,
    },
});

export default AuthTextField;
