import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackToAppHomepage() {
    navigation.navigate('orphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => { navigation.goBack }} >
        <Feather name='arrow-left' size={24} color="#15bcd6" />
      </BorderlessButton>

      <Text style={styles.title} > {title} </Text>

      {
        showCancel ? (
          <BorderlessButton onPress={() => { handleGoBackToAppHomepage }} >
            <Feather name='arrow-left' size={24} color="#ff669d" />
          </BorderlessButton>
        ) : <View />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16
  }

})