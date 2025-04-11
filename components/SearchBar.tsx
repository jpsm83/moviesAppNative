import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface IProps {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = (props: IProps) => {
    const { placeholder, onPress } = props;

  return (
    <View className='flex-row items-center bg-dark-200 reounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#a8b8ff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})