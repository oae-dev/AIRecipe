import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useContext } from 'react';
import { useUser } from '../context/authcontext';
import colors from '../../services/colors';
import { useVeg} from '../context/vegSwitchContext';



const HomeHeader = () => {
    const { user } = useUser();
    const {veg,setveg} = useContext(useVeg);
    const username = user?.email?.split('@')[0] ?? '';
    const lettersOnly = username.match(/^[A-Za-z]+/)?.[0] ?? '';
    return (
        <View style={styles.container}>


            <View style={styles.profile}>
                <View style={styles.imagecontainer}>
                    <Text style={styles.imgText}>{username.charAt(0)}</Text>
                </View>
                <Text style={styles.name}>Hello,{lettersOnly}</Text>
            </View>

            <View style={styles.switchcontainer}>
                {
                    veg ? <Text>Veg</Text> : <Text>Non-Veg</Text>
                }

                <Switch
                    value={veg}
                    onValueChange={() => setveg(!veg)}
                    style={styles.switch}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imagecontainer: {
        backgroundColor: '#39b843',
        height: 36,
        width: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgText: {
        fontSize: 28,
        fontWeight: '600',
        color: colors.White,

    },
    name: {
        fontSize: 22,
        textAlign: 'left',
        marginLeft: 6,
        fontFamily: 'Outfit-Bold',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switch:{
        paddingStart: 10,
    },
    switchcontainer:{
        flexDirection: 'row',
         alignItems: 'center',
    },
});

export default HomeHeader;
