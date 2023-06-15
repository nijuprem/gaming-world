import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

// const theme = extendTheme({ 
//     config : {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   } })

export default theme