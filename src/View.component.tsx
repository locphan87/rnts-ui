import { Constants } from 'expo'
import glamorous, { View as RNView } from 'glamorous-native'
import React, { SFC } from 'react'

import { match } from './utils'

interface IView {
  component?: string
  [styleProp: string]: any
}

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
const Circle = glamorous.view(({ theme, size, color }) => ({
  backgroundColor: color || theme.colors.cta,
  width: size,
  height: size,
  borderRadius: size / 2
}))
const Border = glamorous.view(
  ({ borderStyle, width, height, color, size }) => ({
    width,
    height,
    borderColor: color,
    borderStyle: borderStyle || 'solid',
    borderRightWidth: size,
    left: -1
  })
)
const HR = glamorous.view(({ color, width, height }) => ({
  height,
  width: width || '100%',
  backgroundColor: color
}))

// THE UNIVERSAL VIEW COMPONENT
// Use this for `easier` imports (not recommended)
const View: SFC<IView> = ({ component, ...rest }) => {
  const Component = match(component)({
    Border,
    ExpandView,
    CenterView,
    NavHeader,
    Row,
    HR,
    Circle,
    _: RNView
  })

  return <Component {...rest} />
}

export { View, HR, Border, NavHeader, CenterView, ExpandView, Row, Circle }
