import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Orphanages" component={OrphanagesMap} />
        <Screen name="OprhanagesDetails" component={OrphanagesDetails}/>
      </Navigator>
    </NavigationContainer>
  )
}