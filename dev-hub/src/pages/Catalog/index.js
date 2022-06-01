import { SimpleGrid, Box, Show, Hide } from '@chakra-ui/react';
import { CatalogItem } from '../../components/CatalogItem';

export const Catalog = () => (
  <Hide breakpoint="( max-width 1440px">
    <SimpleGrid minChildWidth="620px" spacing="100px">
      <Box height="400" pt={10}>
        <CatalogItem />
      </Box>
      <Box height="400" pt={10}>
        <CatalogItem />
      </Box>
      <Box height="400" pt={10}>
        <CatalogItem />
      </Box>
    </SimpleGrid>
  </Hide>
);
