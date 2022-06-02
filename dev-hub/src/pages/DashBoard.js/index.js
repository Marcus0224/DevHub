import { Box, Container, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Center, Stack, Heading} from '@chakra-ui/react'
import * as React from 'react'
import { Info } from './DashInfo'
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ORDERS, QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

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

export const DashBoard = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: 'default'
  });

  const orders = data?.orders || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

 return (
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
        Welcome  to your DevHub Dashboard
      </Heading>
      </Center>
    </Stack>
    <Tabs>
      <TabList>
        <Tab> Active Orders</Tab>
        <Tab> Past Orders</Tab>
      </TabList>
    <TabPanels>

    {data ? (
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
    ) : (
      <TabPanel>
      <Heading fontWeight='light' m='5%'>You have no active orders</Heading>
      </TabPanel>
    )}

    {data ? (
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
      ) : (
        <TabPanel>
        <Heading fontWeight='light' m='5%'>You have no past orders</Heading>
        </TabPanel>
      )}

    </TabPanels>
    </Tabs>
  </Box>
);
}