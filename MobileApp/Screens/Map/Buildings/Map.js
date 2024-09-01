import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

const Map = ({ coordinates }) => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 27.185855,
    longitude: 31.168430,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    if (coordinates) {
      setInitialRegion({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [coordinates]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        region={coordinates ? {
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        } : initialRegion}
      >
        {coordinates && (
          <Marker coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}>
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                Building coordinates: {coordinates.lat}, {coordinates.lng}
              </Text>
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 500,
    position: 'relative',
    marginHorizontal: 'auto', 
  },
  map: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  marker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  markerText: {
    color: 'black',
  },
});
