import React, { useState, useEffect} from "react";
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions, onPress, TextInput, Animated} from 'react-native';
import { useNavigation, getStateFromPath } from '@react-navigation/native';
import Slider from '@react-native-community/slider'
// import LinearGradient from 'react-native-linear-gradient';
// import {Slider} from '@miblanchard/react-native-slider'; 
import { LinearGradient } from 'expo-linear-gradient';





// import ColorPicker, {
//     Preview,
//     OpacitySlider,
//     BrightnessSlider,
//     HueSlider,
//     SaturationSlider,
//   } from 'reanimated-color-picker';


  
  const SliderScreen = () => {
    
    // const [value, setValue] = useState(0);
    const [value, setValue] = useState(0);

  
    // const [hue, setHue] = useState(0);
    // const backgroundColor = new Animated.Value(0);
  
    // useEffect(() => {
    //   backgroundColor.setValue(hue);
    // }, [hue]);
  
  
    
    // const [minValue, setMinValue] = useState(0);
    // const [maxValue, setMaxValue] = useState(100);
  

    return(
        <View style={styles.container}>

        <Text style={{height: 30}}>
         {value}
        </Text>
        {/* <Slider
        minimumValue={0}
        maximumValue={2}
        step={1}
        value={value}
        onValueChange={setValue}
        style={{ width: 300 }}
      /> */}

      {/* <LinearGradient colors={['#ef32d9', '#89ffd']} style={{with:'100%',
      justifyContent: 'center'}}>
      
      <LinearGradient
      colors={['red', 'yellow', 'lightblue', 'lightgreen']}
      style={styles.gradient}
      start={{ x: 0, y: 0}}
      end={{  x: 1, y: 0 }}
      >
      <Text>laskdjflaksjl</Text>

      </LinearGradient>
      </LinearGradient> */}

      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: value === 0 ? 'red' : 'grey',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: value === 1 ? 'yellow' : 'grey',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: value === 2 ? 'green' : 'grey',
          }}
        />
      </View> */}

      <LinearGradient colors={['#ff0000', '#FFA200', '#FBFF00', '#00ff00']}
      start={{ x: 0, y: 0}}
      end={{  x: 1, y: 0 }}
      style= {{    borderRadius: 20,}}
      >
  <Slider
    style={{ width: 300, height: 15 }}
    minimumValue={0}
    maximumValue={100}
    value={50}
    // onValueChange={(value) => console.log(value)}
    thumbImage={require('../../assets/icon.png')}
    minimumTrackTintColor={'rgba(0,0,0,0.0)'}
    maximumTrackTintColor={'rgba(0,0,0,0.0)'}
    thumbTintColor={''}
    onValueChange={setValue}
    
    
  />
</LinearGradient>

      {/* <View style={styles.container}>
      <LinearGradient
        colors={['#ff0000', '#00ff00', '#0000ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Slider
          minimumValue={0}
          maximumValue={1}
          value={value}
          onValueChange={setValue}
          style={styles.slider}
          thumbTintColor="#fff"
          minimumTrackTintColor="#transparent"
          maximumTrackTintColor="#transparent"
        />
      </LinearGradient>
      <Text>Value: {value}</Text>
    </View> */}
    </View>
    )
}

export default SliderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  gradient: {
    height: 40,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',

  },
  slider: {
    transform: [
      {
        translateX: -20,
      },
    ],
  },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 2,
//         marginTop: '115%',
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20,
//         backgroundColor: '#f4f4f4',
//         alignItems: 'center',
//     },
//     shadow: {
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//     },
//     linearGradient: {
//       borderRadius: 20,
//       height: 15,
//       justifyContent: 'center',
//     },
//      brightThumb: {
//       backgroundColor: COLORS.WHITE,
//       borderColor: COLORS.GREY,
//       borderRadius: 10,
//       borderWidth: 5,
//       height: 20,
//       width: 20,
//      },

// });
