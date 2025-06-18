import { View, Text, ActivityIndicator, Modal, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../services/colors';


type Myloadertype = {
    visible: boolean
}

const Myloader = ({ visible = false }: Myloadertype) => {
    return (
        <Modal transparent visible={visible}>
            <View style={styles.modal}>
                <View style={styles.loaderRaper}>
                    <ActivityIndicator size={'large'}
                        color={'white'} />
                    <Text style={styles.loadingText}>Loading..</Text>
                </View>

            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.Green,
        alignItems: 'center',
    },
    loaderRaper: {
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 15,
    },
    loadingText: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'Outline-Bold',
        marginTop: 5,
    },
});

export default Myloader;
