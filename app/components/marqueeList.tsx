
import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Marquee } from '@animatereactnative/marquee';

type MarqueeListProps = {
    data: number[],
    speed: number
}


const MarqueeList = (props: MarqueeListProps) => {
    return (
        <View style={styles.container}>
            <Marquee
                speed={props.speed}
            >
                <View style={styles.marquestyle}>
                    {

                        props.data.map((item: number, index) => {
                            return (
                                <View key={index} style={styles.imageWrapper}>
                                    <Image source={item} style={styles.img} />
                                </View>

                            );
                        })
                    }
                </View>
            </Marquee>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 170,
        justifyContent: 'center',
        overflow: 'hidden', margin: 4,
        transform: [{ rotate: '-5deg' }],
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    imageWrapper: {
        width: 220,
        height: 160,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    marquestyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MarqueeList;
