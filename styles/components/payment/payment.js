import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

    export default StyleSheet.create({
    
  backgroundImage: {
  
    width: SIZES.width,
    height: SIZES.height,
    padding: 40,
  },
  textTiltle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.tabBarBrown,  
    marginLeft: 50,
    marginTop: 40

  },

    title: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cardDetailLabel: {
      color: 'white',
      fontSize: 20,
      marginTop: 50,
      // backgroundColor: COLORS.tabBarBrown,
      backgroundColor: COLORS.metallicGold,
      borderColor: 'yellow',
      marginHorizontal: 15,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: COLORS.tabBarBrown,
      borderRadius: 10,
      height: 30/100*(SIZES.height)
    },
    cardDetailLabels: {
      color: COLORS.tabBarBrown,
      fontSize: 20,
      marginTop: 50,
      // backgroundColor: COLORS.tabBarBrown,
      backgroundColor: COLORS.metallicGold,
      borderColor: 'yellow',
      marginHorizontal: 8,
      borderRadius: 10,
    },
    cardField: {
      height: 50, 

    },
    button: {
      backgroundColor: COLORS.metallicGold,
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
      marginHorizontal: 15
    },
    buttonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
  });

  