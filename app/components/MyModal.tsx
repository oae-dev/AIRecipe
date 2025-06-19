import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type modalproptype = {
    visiblility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const MyModal = ({visiblility,setVisibility}:modalproptype) => {
  return (
    <Modal visible={visiblility} transparent>
      <View style={styles.modal}>
        <View style={styles.modalouter}>
          <TouchableOpacity onPress={()=>setVisibility(false)} style={styles.crossView}>
            <Image source={require('../../assets/icons/cross.png')} style={styles.crossIcon}/>
          </TouchableOpacity>
          <Text style={styles.modalInfo}>Please Enter Your Data</Text>
            
        </View>

      </View>
        
    </Modal>
  );
};


const styles = StyleSheet.create({
  modal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalouter:{
    height:200,
    width:'70%',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    elevation:4
  },
  modalInfo:{
    fontSize:20,
    fontFamily:'Outfit-Bold'
  },
  crossView:{
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:10,
    right:10
    
  },
  crossIcon:{
    height:'70%',
    width:'70%',
  }
});

export default MyModal;
