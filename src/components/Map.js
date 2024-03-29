import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

function Map() {
  const points = []
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001
    })
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        latitudeDelta: 0.01,
        longitude: -122.03121,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline
        coordinates={points}
      />
    </MapView>
  )
}

export default Map