import glamorous from 'glamorous-native'
import React, { SFC } from 'react'

import { Circle } from './View.component'

interface CircleProps {
  size: number
  [styleProp: string]: any
}

const paddingSize = 6
const SmallCircle = glamorous.view(({ size }: CircleProps) => ({
  backgroundColor: 'white',
  width: size - paddingSize,
  height: size - paddingSize,
  borderRadius: (size - paddingSize) / 2
}))

const DoubleCircle: SFC<any> = (props) => (
  <Circle alignItems="center" justifyContent="center" {...props}>
    <SmallCircle size={props.size} />
  </Circle>
)

export default DoubleCircle
