import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MapboxNavigation from 'react-native-mapbox-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MapboxNavigation
          origin={[-97.760288, 30.273566]}
          destination={[-97.918842, 30.494466]}
          shouldSimulateRoute
          showsEndOfRouteFeedback
          onLocationChange={(event) => {
            const { latitude, longitude } = event.nativeEvent;
          }}
          onRouteProgressChange={(event) => {
            const {
              distanceTraveled,
              durationRemaining,
              fractionTraveled,
              distanceRemaining,
            } = event.nativeEvent;
          }}
          onError={(event) => {
            const { message } = event.nativeEvent;
          }}
          onCancelNavigation={() => {
            // User tapped the "X" cancel button in the nav UI
            // or canceled via the OS system tray on android.
            // Do whatever you need to here.
          }}
          onArrive={() => {
            // Called when you arrive at the destination.
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
    backgroundColor: 'black',
  },
});
