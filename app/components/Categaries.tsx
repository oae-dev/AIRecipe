import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';


type catlisttype = {
  image: number,
  title: string
}

const catlist: catlisttype[] = [
  {
    image: require('../../assets/Images/home/fd1.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd2.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd3.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd4.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd5.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd6.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd7.png'),
    title: 'breakfast',
  },
  {
    image: require('../../assets/Images/home/fd8.png'),
    title: 'breakfast',
  },
];


const Categaries = () => {
  return (
    <View>
      <Text style={styles.heading}>Categaries</Text>

      <FlatList data={catlist}
        numColumns={4}

        renderItem={({ item }) => (
          <View style={styles.flatList}>

            <Image source={item.image} style={styles.img} />
            <Text style={styles.catTitle}>{item.title}</Text>

          </View>
        )} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    marginTop: 10,
  },
  img: {
    height: 50,
    width: 50,
  },
  flatList: {
    flex: 1,
    margin: 15,

  },
  catTitle: {
    marginTop: 5,
  },
});

export default Categaries;
