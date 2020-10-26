import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

import mapMarker from '../Images/mapMarker.png';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {

  const [orphanages, setOrphanage] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanage(response.data);
    });

  }, []);

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {
          orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapMarker}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
              >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                  <View style={styles.calloutCotainer} >
                    <Text style={styles.calloutText} > {orphanage.name} </Text>
                  </View>

                </Callout>
              </Marker>
            )
          })
        }
      </MapView>

      <View style={styles.footer} >
        <Text style={styles.footerText}> 2 Orfanatos encontrados </Text>

        <RectButton style={styles.createOrphanageButton} onPress={() => { handleNavigateToCreateOrphanage }} >
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutCotainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 52,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: "#8fe7b5",
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: "center"
  }
});
