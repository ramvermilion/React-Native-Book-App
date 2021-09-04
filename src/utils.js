export const capitalizeFirstChar = str =>
  str.charAt(0).toUpperCase() + str.substring(1);

export const horizontalAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const randomInteger = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const RandomIdGenerator = ()=>{
  // return Number((Math.random() * (100 - 20 + 1)).toFixed(5))
  return Math.random()
}
