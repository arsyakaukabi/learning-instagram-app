import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";


export default StyleSheet.create({
    post: {},
  
    image: {
      width: '100%',
      aspectRatio: 1,
    },
  
    header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  
    userAvatar: {width: 50, aspectRatio: 1, borderRadius: 25, marginRight: 10},
  
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
      fontSize: fonts.size.default,
    },
  
    threeDots: {marginLeft: 'auto'},
  
    footer: {padding: 12},
  
    iconContainer: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
  
    icon: {marginHorizontal: 5},
  
    text: {color: colors.black, fontSize: fonts.size.default, lineHeight: 22},
  
    bold: {fontWeight: fonts.weight.bold},

  });
  