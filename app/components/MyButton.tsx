import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../services/colors';

type MyButtonProps ={
    title:string,
    color:string,
    onpress: ()=> void
}

const MyButton = ({title,color,onpress}:MyButtonProps) => {
  return (
    <TouchableOpacity
    onPress={onpress}
    style={[styles.btn,{backgroundColor:color}]}>
            <Text style={styles.btntext}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn:{
        borderRadius:20,
    },
    btntext:{
        color:colors.White,
        textAlign:'center',
        padding:20,
        fontWeight:'600',
        fontSize: 19,
    },
});

export default MyButton;
