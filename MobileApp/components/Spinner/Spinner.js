import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const Spinner = () => {
  const bounce1 = new Animated.Value(1);
  const bounce2 = new Animated.Value(1);
  const bounce3 = new Animated.Value(1);

  React.useEffect(() => {
    const createBounceAnimation = (animatedValue, delay) => {
      return Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.5,
          duration: 400,
          delay,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]);
    };

    Animated.loop(
      Animated.stagger(160, [
        createBounceAnimation(bounce1, 0),
        createBounceAnimation(bounce2, 160),
        createBounceAnimation(bounce3, 320),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.spinner}>
      <Animated.View style={[styles.bounce, { transform: [{ scale: bounce1 }] }]} />
      <Animated.View style={[styles.bounce, { transform: [{ scale: bounce2 }] }]} />
      <Animated.View style={[styles.bounce, { transform: [{ scale: bounce3 }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  bounce: {
    width: 24, // 1.5rem in px
    height: 24,
    backgroundColor: '#333',
    borderRadius: 12,
    marginHorizontal: 5,
  },
});

export default Spinner;
