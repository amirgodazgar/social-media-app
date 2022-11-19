import React from 'react';
import {Text as CustomText} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Text = ({type, children, style}) => {
  const fontStyle = () => {
    const isRegular =
      style && style.hasOwnProperty('fontWeight') && +style.fontWeight <= 400;
    const isMedium =
      style && style.hasOwnProperty('fontWeight') && +style.fontWeight === 500;

    const isSemiBold =
      style && style.hasOwnProperty('fontWeight') && +style.fontWeight === 600;

    const isBold =
      style && style.hasOwnProperty('fontWeight') && +style.fontWeight === 700;

    const isExtraBold =
      style && style.hasOwnProperty('fontWeight') && +style.fontWeight >= 800;

    if (isRegular) return styles.regular;
    if (isMedium) return styles.medium;
    if (isSemiBold) return styles.semiBold;
    if (isBold) return styles.bold;
    if (isExtraBold) return styles.extraBold;
    else return styles.regular;
  };

  return <CustomText style={[fontStyle(), style]}>{children}</CustomText>;
};

export default Text;

const styles = ScaledSheet.create({
  regular: {
    fontFamily: 'BalooThambi2-Regular',
    color: '#EAEAEA',
  },
  medium: {
    fontFamily: 'BalooThambi2-Medium',
    color: '#EAEAEA',
  },
  semiBold: {
    fontFamily: 'BalooThambi2-SemiBold',
    color: '#EAEAEA',
  },
  bold: {
    fontFamily: 'BalooThambi2-Bold',
    color: '#EAEAEA',
  },
  extraBold: {
    fontFamily: 'BalooThambi2-ExtraBold',
  },
});
