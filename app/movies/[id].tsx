import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Movie = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}

export default Movie