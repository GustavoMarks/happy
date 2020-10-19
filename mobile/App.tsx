import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

import { Feather } from "@expo/vector-icons";
import mapMarker from './src/Images/mapMarker.png';

export default function App() {
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
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -27.2092052,
            longitude: -49.6401092,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => alert('oi')}>
            <View style={styles.calloutCotainer} >
              <Text style={styles.calloutText} > Lar das Meninas </Text>
            </View>

          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer} >
        <Text style={styles.footerText}> 2 Orfanatos encontrados </Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }} >
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
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
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
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