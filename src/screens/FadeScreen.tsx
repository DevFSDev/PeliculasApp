import React, { useReducer, useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useEffect } from 'react';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const {fadeIn, fadeOut, opacity} = useFade();


    return (
        <View style={{flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
            <Animated.View style={{backgroundColor: '#084F6A', width: 150, height: 150, borderColor: 'white', borderWidth: 10, opacity, marginBottom: 10}} />
            <Button title="FadeIn" onPress={() => fadeIn}/>
            <Button title="FadeOut" onPress={() => fadeOut}/>
        </View>

    )

}
