import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import GenrateRecipies from './GenrateRecipies';

const Steps = (steps: any) => {
  console.log(steps);
  return (
    <View >
      <Text style={styles.heading}>Steps</Text>
      <View>
        {
          steps.steps.map((item: any, index: string) => {
            return (
              <View key={index} style={steps.steplist}>
                <Text style={styles.number}>{index + 1}</Text>
                <Text style={styles.step}>
                  {item}
                </Text>
              </View>
            );
          })
        }
      </View>
      <GenrateRecipies veg={true} />
      <View style={styles.devider} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    marginTop: 10,
  },
  devider: {
    height: 30,
  },
  number: {
    margin: 5,
    paddingTop: 3,
    height: 30,
    width: 30,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 15,
    backgroundColor: '#cedbbd',
    fontSize: 19,
  },
  step: {
    fontSize: 19,
    marginStart: 10,
    marginBottom: 5,
  },
  steplist: {
    flexDirection: 'row',
    margin: 10,
    paddingEnd: 25,
  },
});

export default Steps;
