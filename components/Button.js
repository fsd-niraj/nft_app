import { TouchableOpacity, View, Text,  Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{height: 40, width: 40, backgroundColor: COLORS.white, borderRadius: SIZES.extraLarge, alignItems: "center", justifyContent: "center", position: "absolute", ...SHADOWS.light, ...props}} onPress={handlePress}>
      <Image source={imgUrl} resizeMode="contain" style={{height: 24, width: 24}} />
    </TouchableOpacity>
  )
}

export const RectButton = ({handlePress, minWidth, fontSize, ...props}) => {
  return (
    <TouchableOpacity style={{backgroundColor: COLORS.primary, borderRadius: SIZES.extraLarge, padding: SIZES.small, minWidth: minWidth, ...props}} onPress={handlePress}>
     <Text style={{fontFamily: FONTS.semiBold, fontSize: fontSize, color: COLORS.white, textAlign: "center"}}>Place a bid</Text>
    </TouchableOpacity>
  )
}