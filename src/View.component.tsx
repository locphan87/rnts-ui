import { Constants } from 'expo'
import glamorous from 'glamorous-native'
import React, { SFC } from 'react'

import { match } from './utils'
import { IUniversalComponentProps, ITheme } from './Text.component'

type Length = number | string

const ExpandView = glamorous.view({
  flex: 1
})
const Row = glamorous.view({
  flexDirection: 'row'
})
const NavHeader = glamorous.view({
  paddingTop: Constants.statusBarHeight,
  flexDirection: 'row'
})
const CenterView = glamorous.view({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})
const Circle = glamorous.view(({ theme, size, color }: {
  theme: ITheme,
  size: number,
  color?: string
}) => ({
  backgroundColor: color || theme.colors.cta,
  width: size,
  height: size,
  borderRadius: size / 2
}))
const Border = glamorous.view(
  ({ borderStyle = 'solid', width, height, color, size }: any) => ({
    width,
    height,
    borderColor: color,
    borderStyle: borderStyle,
    borderRightWidth: size,
    left: -1
  })
)
const HR = glamorous.view(({ color, width, height }: {
  color: string,
  width: Length,
  height: Length
}) => ({
  height,
  width: width || '100%',
  backgroundColor: color
}))

// THE UNIVERSAL VIEW COMPONENT
// Use this for `easier` imports (not recommended)
const View: SFC<IUniversalComponentProps> = ({ component, ...rest }) => {
  const Component = match(component)({
    Border,
    ExpandView,
    CenterView,
    NavHeader,
    Row,
    HR,
    Circle,
    _: glamorous.view({})
  })

  return <Component {...rest} />
}

export { View, HR, Border, NavHeader, CenterView, ExpandView, Row, Circle }
