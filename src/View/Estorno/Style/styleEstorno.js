import { StyleSheet } from "react-native"

export default StyleSheet.create({
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
  imgCover: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    position: 'absolute',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

