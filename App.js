import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import Nav from './screens/Nav';
import EventMapScreen from './screens/EventMapScreen';
import { useEffect, useState } from 'react';
export default function App() {
  const [splash,setSplash]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(true)
    },3000)
  },[])
  return (
    <NavigationContainer>
      {
        splash ?<EventMapScreen/> : <SplashScreen/>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
  },
});
