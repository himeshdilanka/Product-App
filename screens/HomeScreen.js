import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <View className="flex-1 justify-center items-center w-full p-6 bg-white rounded-lg shadow-md">
        <Text className="text-2xl mt-4 mb-4 font-extrabold text-blue-900">Enter Code</Text>
        <TextInput
          className="border border-blue-300 p-2 w-64 text-center rounded-md"
          keyboardType="number-pad"
          placeholder="Enter Code"
        />
        <View className="mt-4 w-40 h-10 text-center">
          <TouchableOpacity
            className="bg-blue-500 p-2 rounded-lg items-center justify-center"
            onPress={() => navigation.navigate('ItemPage')}
          >
            <Text className="text-white text-lg font-semibold">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="absolute bottom-10 w-full items-center">
        <Text>Contact if you have any issue - 0778962449</Text>
      </View>
    </SafeAreaView>
  );
}
