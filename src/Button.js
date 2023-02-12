import {Box, Button as ButtonNative, Alert} from 'native-base'

export default function Button(){
  return(
    <Box>
      <ButtonNative onPress={() => console.log("hello world")}>Click Me</ButtonNative>
    </Box>
  )
}