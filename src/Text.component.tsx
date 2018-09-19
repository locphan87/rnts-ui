import glamorous  from 'glamorous-native'
import React, { SFC } from 'react'

import { match } from './utils'

interface ITheme {
  fonts: {
    [fontName: string]: {
      [fontStyle: string]: any
    }
  }
  colors: {
    [colorName: string]: string
  }
  size: {
    [sizeName: string]: number
  }
}
interface ITextProps {
  theme: ITheme
  color?: string
  size?: number
}
interface IUniversalComponentProps {
  component?: string
  [otherProp: string]: any
}

const NormalText = glamorous.text(({ theme, color, size }: ITextProps) => ({
  fontFamily: theme.fonts.NotoSans.Regular,
  fontSize: size || theme.size.normal,
  color: color || theme.colors.text
}))
const Title = glamorous.text(({ theme, color, size }: ITextProps) => ({
  fontFamily: theme.fonts.NotoSans.Bold,
  fontSize: size || theme.size.title,
  color: color || theme.colors.text
}))
const LabelText = glamorous.text(({ theme, color, size }: ITextProps) => ({
  fontFamily: theme.fonts.NotoSans.SemiBold,
  fontSize: size || theme.size.label,
  color: color || theme.colors.warm_grey
}))

// THE UNIVERSAL TEXT COMPONENT
// Use this for `easier` imports (recommended)
const Text: SFC<IUniversalComponentProps> = ({ component, ...rest }) => {
  const Component = match(component)({
    LabelText,
    Title,
    NormalText,
    _: glamorous.text({})
  })

  return <Component {...rest} />
}

export {
  Text,
  Title,
  LabelText,
  NormalText,
  ITextProps,
  ITheme,
  IUniversalComponentProps
}
