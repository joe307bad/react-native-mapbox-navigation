// @ts-nocheck

import * as React from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';

type Coordinate = [number, number];

type OnLocationChangeEvent = {
  nativeEvent?: {
    latitude: number;
    longitude: number;
  };
};

type OnRouteProgressChangeEvent = {
  nativeEvent?: {
    distanceTraveled: number;
    durationRemaining: number;
    fractionTraveled: number;
    distanceRemaining: number;
  };
};

type OnErrorEvent = {
  nativeEvent?: {
    message?: string;
  };
};

export interface IMapboxNavigationProps {
  origin: Coordinate;
  destination: Coordinate;
  shouldSimulateRoute?: boolean;
  onLocationChange?: (event: OnLocationChangeEvent) => void;
  onRouteProgressChange?: (event: OnRouteProgressChangeEvent) => void;
  onError?: (event: OnErrorEvent) => void;
  onCancelNavigation?: () => void;
  onArrive?: () => void;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
  mute?: boolean;
}

const MapboxNavigation = (props: IMapboxNavigationProps) => {
  return <RNMapboxNavigation style={styles.container} {...props} />;
};

const RNMapboxNavigation = requireNativeComponent(
  'MapboxNavigation',
  MapboxNavigation
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapboxNavigation;
