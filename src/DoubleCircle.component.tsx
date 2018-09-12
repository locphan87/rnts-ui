import glamorous from 'glamorous-native'
import React from 'react'

import { Circle } from './View.component'

const paddingSize = 6
const SmallCircle = glamorous.view(({ size }) => ({
  backgroundColor: 'white',
  width: size - paddingSize,
  height: size - paddingSize,
  borderRadius: (size - paddingSize) / 2
}))

const DoubleCircle = props => (
  <Circle alignItems="center" justifyContent="center" {...props}>
    <SmallCircle size={props.size} />
  </Circle>
)

export default DoubleCircle
