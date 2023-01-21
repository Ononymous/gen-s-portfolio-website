import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

function ColorModeChanger() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
      <header>
        <IconButton icon={colorMode==="dark"?<MoonIcon/>:<SunIcon/>} onClick={toggleColorMode}/>
      </header>
    )
  }

export default ColorModeChanger