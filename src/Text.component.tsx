import glamorous, { Text as RNText } from 'glamorous-native'
import React from 'react'

import { match } from './utils'

const NormalText = glamorous.text(({ theme, color }) => ({
  fontFamily: theme.fonts.NotoSans.Regular,
  fontSize: 12,
  color: color || theme.colors.text
}))
const LabelText = glamorous.text(({ theme, color }) => ({
  fontFamily: theme.fonts.NotoSans.SemiBold,
  fontSize: 10,
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
