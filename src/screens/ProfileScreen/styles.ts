import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
  userAvatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  name: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    color: colors.black,
  },
});
