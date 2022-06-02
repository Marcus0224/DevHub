import { Box, Container, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Center, Stack, Heading} from '@chakra-ui/react'
import * as React from 'react'
import { Info } from './DashInfo'
const pastInfos = [
  {
    label: '1',
    value: '',
  },
  {
    label: '2',
    value: '',
  },
  {
    label: '3',
    value:'',
  },
]

const activeInfos = [
  {
    label: '4',
    value: '',
  },
  {
    label: '5',
    value: '',
  },
  {
    label: '6',
    value:'',
  },
]

export const DashBoard = () => (
  <Box
    as="section"
    py={{
      base: '4',
      md: '4',
    }}
  >
    <Stack mb={5} mt={5}>
      <Center>
      <Heading size="lg" fontWeight="medium">
        Welcome "" to your DevHub Dashboard
      </Heading>
      </Center>
    </Stack>
    <Tabs>
      <TabList>
        <Tab> Past Orders</Tab>
        <Tab> Active Orders</Tab>
      </TabList>
    <TabPanels>
     <TabPanel>
      <Center>

    <Container mt={20} >
      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
        }}
        gap={{
          base: '5',
          md: '61',
        }}
      >
        {pastInfos.map(({ label, value }) => (
          <Info key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
      </Center>
     </TabPanel>
     <TabPanel>
      <Center>

    <Container mt={20} >
      <SimpleGrid
        columns={{
          base: 1,
          md: 1,
        }}
        gap={{
          base: '5',
          md: '61',
        }}
      >
        {activeInfos.map(({ label, value }) => (
          <Info key={label} label={label} value={value} />
        ))}
      </SimpleGrid>
    </Container>
      </Center>
     </TabPanel>
    </TabPanels>
    </Tabs>
  </Box>
)