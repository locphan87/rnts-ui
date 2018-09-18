import glamorous, { Text as RNText } from 'glamorous-native'
import React from 'react'

import { match } from './utils'

const NormalText = glamorous.text(({ theme, color, size }) => ({
  fontFamily: theme.fonts.NotoSans.Regular,
  fontSize: size || theme.size.normal,
  color: color || theme.colors.text
}))
const LabelText = glamorous.text(({ theme, color, size }) => ({
  fontFamily: theme.fonts.NotoSans.SemiBold,
  fontSize: size || theme.size.label,
  color: color || theme.colors.warm_grey
}))

// THE UNIVERSAL TEXT COMPONENT
// Use this for `easier` imports (recommended)
const Text = ({ component, ...rest }) => {
  const Component = match(component)({
    LabelText,
    NormalText,
    _: RNText
  })

  return <Component {...rest} />
}

export {
  Text,
  LabelText,
  NormalText,
}
