import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import GlobalStyles from "./utils/GlobalStyles";
import CategoriesCarousel from "./components/home/CategoriesCarousel";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <Text style={styles.title}>Swipe to Browse</Text>
      <Text style={styles.subTitle}>Discover products easily by swiping from one category to another</Text>
      <View style={styles.carouselWrapper}>
        <CategoriesCarousel />
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.shopButton}>
        <Text style={styles.shopButtonText} >Start Shopping</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text >Already have an account?</Text><Text style={styles.loginLabel}>Log in</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  carouselWrapper: {
    height: Dimensions.get('window').height * 0.5
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30
  },
  shopButton: {
    borderRadius: 20,
    backgroundColor: "#202126",
    paddingHorizontal: 10,
    width: Dimensions.get('window').width * .8,
    paddingVertical: 10,
    marginBottom: 30
  },
  shopButtonText: {
    color: "#fafafa",
    textAlign: "center",
    fontSize: 16
  },
  loginContainer: {
    flexDirection: "row"
  },
  loginLabel: {
    fontWeight: "bold",
    marginLeft: 10
  }
});
