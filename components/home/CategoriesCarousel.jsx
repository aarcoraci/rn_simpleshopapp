import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, ImageBackground, StyleSheet, Dimensions, Image } from "react-native";
import shoes from "../../data/shoes";

class CategoriesCarousel extends Component {

  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      entries: [...shoes]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}  >
        <ImageBackground style={{ width: "100%", height: "100%" }} source={item.image} ></ImageBackground>
      </View>
    );
  }

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 15 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#060606'
        }}
        inactiveDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#C1C1C1'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }

  render() {
    return (
      <>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 0.6}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </>

    );
  }
}

const styles = StyleSheet.create({
  slide: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: '#E0D9D3',
    height: "90%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 10,
  }
});

export default CategoriesCarousel;