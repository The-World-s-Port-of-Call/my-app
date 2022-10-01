import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import AppText from '../components/AppText';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
import Screen from '../components/Screen';

function CourseListing1() {
    const navigation = useNavigation()
    return (
        <Screen>
        <View>
            <Image style = {styles.image} source = {require('../assets/IT.png')} />
            <View style = {styles.backIcon}>
                    <MaterialCommunityIcons name='arrow-left-bold' 
                    color="white" 
                    size={35}
                    onPress={() => {
                        navigation.replace("tabs")
                  }} />
            </View>
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title}>Runners Zoom at Nike's First 21K We Run Kuala Lumpur Race</AppText>
                <AppText style = {styles.pricing}>$50/pax</AppText>
                <View styles = {styles.Profile}>
                    {/* <Profile
                        image = {require('../assets/IT.jpg')}
                        title = "Nike"
                        subTitle= "4 Events"
                    /> */}
                </View>
            </View>
            <Text style = {{padding: 20, bottom: 50}}>
            On Feb. 1, a field of 8,000 athletes raced toward their personal bests at Nike’s We Run Kuala Lumpur 21K. For the first time, the race featured a 21K distance, making it one of four cities to host a half-marathon distance in the global Nike We Run Race Series, which aims to inspire athletes to push themselves beyond their limits and unleash their potential.
            </Text>
            
        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
        bottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
    pricing: {
        fontSize: 20,
        color: colors.secondary,
    },
    Profile: {
        padding: 30,
    },
    backIcon: {
        bottom: 280,
        left: 10,
    }
})

export default CourseListing1;