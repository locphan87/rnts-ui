import glamorous  from 'glamorous-native'
import { ImageBackground as RNImageBG } from 'react-native'

const ImageBackground = glamorous(RNImageBG)(() => ({
  width: '100%',
  height: '100%',
  flex: 1
}))

export default ImageBackground
