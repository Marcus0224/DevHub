
import { SimpleGrid, Box, Hide } from "@chakra-ui/react"
import { SingleTemplate } from "../../components/SingleTemplate"
import { websiteTypes } from "../../utils/_data"


export const Catalog = () => (
    <Box bg='RGBA(160,174,192,0.2)'>
        
    <SimpleGrid minChildWidth='720px' spacing='100px'>
      {websiteTypes.map(website => (
        <Box height='400' pt={10} ><SingleTemplate website={website}/></Box>
      ))}
</SimpleGrid>
    </Box>
)
