import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container} className="bg-green-600 items-center justify-center">
              <View className="rounded-full border-2 p-4 items-center justify-center border-white">
                <Text className="font-bold text-4xl text-white">DigiCampX</Text>
              </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
    
        
      },
    });
    
export default SplashScreen