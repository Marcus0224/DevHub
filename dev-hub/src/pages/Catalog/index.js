import { SimpleGrid, Box, Show, Hide } from "@chakra-ui/react"
import { EcommerceCatalogItem } from "../../components/EcommerceCatalogItem"
import { SocialCatalogItem } from "../../components/EcommerceCatalogItem/SocialCatalogItem"
import { FoodCatalogItem } from "../../components/FoodCatalogItem"
import { NewsCatalogItem } from "../../components/NewsCatalogItem"


export const Catalog = () => (
    <Hide breakpoint="( max-width 1440px">
        
    <SimpleGrid minChildWidth='520px' spacing='100px'>
 <Box height='400' pt={10} ><EcommerceCatalogItem/></Box>
 <Box height='400' pt={10}><NewsCatalogItem/></Box>
 <Box height='400' pt={10}><SocialCatalogItem/></Box>
 <Box height='400' pt={10}><FoodCatalogItem/></Box>
</SimpleGrid>
    </Hide>
)