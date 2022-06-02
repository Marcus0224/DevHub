import { SimpleGrid, Box, Hide } from "@chakra-ui/react"
import { SingleTemplate } from "../../components/SingleTemplate"
import { websiteTypes } from "../../utils/_data"


export const Catalog = () => (
    <Hide breakpoint="( max-width 1440px">
        
    <SimpleGrid minChildWidth='520px' spacing='100px'>
      {websiteTypes.map(website => (
        <Box height='400' pt={10} ><SingleTemplate website={website}/></Box>
      ))}
</SimpleGrid>
    </Hide>
)
