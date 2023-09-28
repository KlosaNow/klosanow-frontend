import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Heading,
  Input,
  List,
  Image,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {  AddIcon } from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";
import MasterCard from '../../assets/images/MasterCard.png'
import SubscriptionModal from "../../components/Modals/SubscriptionModal/SubscriptionModal";
import { useState } from "react";

const DesktopSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedStyle = {
    borderBottom: "3px solid #7B58F4",
    color: "#7B58F4",
    // padding: "0px",
  };

  const tabStyle = {
    fontSize: "14px",
    padding: "0px 10px",
  };

  const allPlans = [
    {
      id: '1',
      plan: 'Free Plan',
      amount: '₦0',
      benefits: [
        '1.2GB storage',
        'Create Open Study Group',
        'Create & Receive Video Lessons',
        'Create & Receive Video Lessons',
      ],
      status: 'Subscribed',
    },
    {
      id: '2',
      plan: 'Basic',
      amount: '₦1,500',
      benefits: [
        '5GB storage',
        'Create Open Study Group',
        'Create & Receive Video Lessons',
        'Create & Receive Video Lessons',
      ],
      status: 'Choose Plan',
    },
    {
      id: '3',
      plan: 'Premium',
      amount: '₦5,000',
      benefits: [
        'Unlimited Storage',
        'Create Open & Study Group',
        'Create & Receive Video Lessons',
        'Create Channels',
      ],
      status: 'Choose Plan',
    },
  ];

  const paymentMethods = [
    {
      id: '1',
      name: 'payment1',
      number: '**** **** **** 8976',
      expiry: 'Expiry 10/24',
      icon: MasterCard
    },
    {
      id: '2',
      name: 'payment2',
      number: '**** **** **** 1234',
      expiry: 'Expiry 09/23',
      icon: MasterCard
    },
  ]


  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Box>
        <Text
          fontSize={["20px", "32px"]}
          fontWeight="500"
          lineHeight={["30px", "20px"]}
          margin="0.5rem 0 1rem"
          color={["#D9927B", "#000"]}
        >
          Settings
        </Text>

        <Tabs width="full" marginTop="30px">
          <TabList gap="20px" color="neutral.80" border="0px">
            <Tab _selected={selectedStyle} style={tabStyle}>
              Account{" "}
            </Tab>
            <Tab _selected={selectedStyle} style={tabStyle}>
              Notifications{" "}
            </Tab>
            <Tab _selected={selectedStyle} style={tabStyle}>
              Subscriptions{" "}
            </Tab>
            <Tab _selected={selectedStyle} style={tabStyle}>
              Change Pasword{" "}
            </Tab>
            <Tab _selected={selectedStyle} style={tabStyle}>
              Help{" "}
            </Tab>
            <Tab _selected={selectedStyle} style={tabStyle}>
              Terms & Conditions{" "}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>
              <Box backgroundColor="rgba(244, 244, 244, 0.3)" padding={10}>
                <Box marginBottom={10}>
                  <Heading size="md">Subscriptions</Heading>
                  <Text color="rgba(42, 42, 42, 1)">Discover the perfect plan that aligns with your requirements and unlocks a world of exclusive benefits</Text>
                </Box>
                <Box>
                  <SimpleGrid spacing={4} justifyContent='center' columns={[2, null, 3]}>
                    {allPlans.map(plan => (
                      <Card key={plan.id}>
                        <CardHeader color="white" backgroundColor="rgba(123, 88, 244, 1)">
                          <Text size='md' textAlign='center' marginBottom="4">{plan.plan}</Text>
                          <Heading size='md' textAlign='center'>{plan.amount}</Heading>
                        </CardHeader>
                        <CardBody>
                          <Box>
                            <List spacing={3}>
                                {plan.benefits.map(benefit => (
                                  <ListItem>
                                    <ListIcon as={MdCheckCircle} color='rgba(102, 73, 203, 1)' />
                                    {benefit}
                                  </ListItem>
                                ))}
                            </List>
                          </Box>
                        </CardBody>
                        <CardFooter display="flex" justifyContent="center">
                          {plan.status === 'Subscribed' ? 
                            (
                              <Button 
                                backgroundColor='rgba(123, 88, 244, 1)' 
                                color="white" 
                                fontSize={16} 
                                width='100%' 
                                fontWeight="normal"
                                _hover={{bg: 'white', borderColor: 'rgba(123, 88, 244, 1)', borderWidth: '1px',color: 'rgba(123, 88, 244, 1)'}}                                
                              >
                                {plan.status}
                              </Button>
                            ) :
                              (
                                <Button 
                                variant='outline' 
                                colorScheme='rgba(123, 88, 244, 1)' 
                                color="rgba(123, 88, 244, 1)" 
                                width='100%' 
                                fontWeight="normal" 
                                _hover={{backgroundColor:'rgba(123, 88, 244, 1)', color: 'white' }}
                                onClick={openModal}                                                         
                              >
                                {plan.status}
                              </Button>
                            )
                          }
                        </CardFooter>

                      </Card>
                    ))}                         
                  </SimpleGrid>
                </Box>
              </Box>
              <Box backgroundColor="rgba(244, 244, 244, 0.3)" padding={10} marginTop={92}>
                <Heading size="sm" marginBottom={5}>Payment Methods</Heading>
                <VStack spacing={4} align="start" backgroundColor="white">
                  {
                    paymentMethods.map((option) => (
                      <Box
                        key={option.id}
                        borderWidth="1px"
                        borderColor="gray.200"
                        p={4}
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        w="100%"
                      >
                        <FormControl as="fieldset" width="0%">
                          <RadioGroup>
                            <Radio value={option.id} size="lg" mr={4} />
                          </RadioGroup>
                        </FormControl>
                        <Image
                          src={option.icon}
                          alt={option.name}
                          boxSize="40px"
                          mr={4}
                        />
                        <Box>          
                          <Text>{option.number}</Text>
                          <Text>{option.expiry}</Text>
                        </Box>
                        <Box  ml="auto">
                          {Array(3).fill(null).map((_, index) => (
                            <Text  cursor="pointer" key={index} width="2.67px" height= "8px"  color="rgba(85, 85, 85, 1)">
                              °
                            </Text>
                          ))}
                        </Box>
                      </Box>
                    ))
                  }
                </VStack>
                  <Box display="flex" alignItems="center" marginTop={10} backgroundColor="rgba(255, 255, 255, 1)" color="rgba(123, 88, 244, 1)" padding={3} width="30%" cursor="pointer">
                    <AddIcon marginRight={3} />
                    New Payment Method
                  </Box>
              </Box>
            </TabPanel>
            <TabPanel>4</TabPanel>
            <TabPanel>5</TabPanel>
            <TabPanel>6</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default DesktopSettings;
