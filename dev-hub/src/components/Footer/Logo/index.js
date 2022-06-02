
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import DevHub_logos_black from '../../../assets/images/DevHub_logos_black.png'

export const Logo = () => (
<Box>
    <Link to='/'>
        <img src={DevHub_logos_black} alt= 'logo'>
        </img>
    </Link>
</Box>
  
)