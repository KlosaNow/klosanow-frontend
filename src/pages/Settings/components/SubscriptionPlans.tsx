import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  List,
  Image,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import MasterCard from "../../../assets/images/MasterCard.png";
import { AddIcon } from "@chakra-ui/icons";
import { GoCheckCircleFill } from "react-icons/go";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";

interface props {
  openModal: () => void;
}
const SubscriptionPlans = ({ openModal }: props) => {
  const allPlans = [
    {
      id: "1",
      plan: "Free Plan",
      amount: "₦0",
      benefits: [
        "1.2GB storage",
        "Create Open Study Group",
        "Create & Receive Video Lessons",
        "Create & Receive Video Lessons",
      ],
      status: "Subscribed",
    },
    {
      id: "2",
      plan: "Basic",
      amount: "₦1,500",
      benefits: [
        "5GB storage",
        "Create Open Study Group",
        "Create & Receive Video Lessons",
        "Create & Receive Video Lessons",
      ],
      status: "Choose Plan",
    },
    {
      id: "3",
      plan: "Premium",
      amount: "₦5,000",
      benefits: [
        "Unlimited Storage",
        "Create Open & Study Group",
        "Create & Receive Video Lessons",
        "Create Channels",
      ],
      status: "Choose Plan",
    },
  ];

  const paymentMethods = [
    {
      id: "1",
      name: "payment1",
      number: "**** **** **** 8976",
      expiry: "Expiry 10/24",
      icon: MasterCard,
    },
    {
      id: "2",
      name: "payment2",
      number: "**** **** **** 1234",
      expiry: "Expiry 09/23",
      icon: MasterCard,
    },
  ];

  return (
    <Box>
      <Box backgroundColor="#f4f4f44d" padding={10}>
        <Box marginBottom={10}>
          <Text
            fontSize="24px"
            fontWeight="semibold"
            fontFamily="inherit"
            marginBottom="5px"
          >
            Subscriptions
          </Text>
          <Text color="rgba(42, 42, 42, 1)">
            Discover the perfect plan that aligns with your requirements and
            unlocks a world of exclusive benefits
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            // spacing={5}
            justifyContent="center"
            columns={[2, null, 3]}
            gridTemplateColumns={[
              "1fr",
              "1fr",
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
            ]}
            gridGap="25px"
          >
            {allPlans.map((plan) => (
              <Card
                key={plan.id}
                borderRadius="4px"
                overflow="hidden"
                maxWidth="320px"
              >
                <CardHeader color="white" backgroundColor="primary.50">
                  <Text size="md" textAlign="center" marginBottom="4">
                    {plan.plan}
                  </Text>
                  <Text
                    fontSize="40px"
                    textAlign="center"
                    fontWeight="semibold"
                  >
                    {plan.amount}
                  </Text>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {plan.benefits.map((benefit) => (
                      <ListItem
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <ListIcon
                          as={GoCheckCircleFill}
                          color="primary.60"
                          width="32px"
                          height="32px"
                          fontSize="12px"
                        />

                        {/* <MdCheckCircle /> */}
                        <Text> {benefit}</Text>
                      </ListItem>
                    ))}
                  </List>
                </CardBody>
                <CardFooter
                  display="flex"
                  justifyContent="center"
                  marginBottom="20px"
                >
                  {plan.status === "Subscribed" ? (
                    <Button
                      backgroundColor="primary.50"
                      color="white"
                      fontSize={16}
                      width="100%"
                      fontWeight="normal"
                      _hover={{
                        bg: "white",
                        borderColor: "primary.50",
                        borderWidth: "1px",
                        color: "primary.50",
                      }}
                    >
                      {plan.status}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      colorScheme="primary.50"
                      color="primary.50"
                      width="100%"
                      fontWeight="normal"
                      _hover={{
                        backgroundColor: "primary.50",
                        color: "white",
                      }}
                      onClick={openModal}
                    >
                      {plan.status}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box
        backgroundColor="#f4f4f44d"
        padding={10}
        marginTop={50}
        borderRadius="10px"
      >
        <Text fontSize="24px" marginBottom={5} fontWeight="semibold">
          Payment Methods
        </Text>
        <VStack spacing={4} align="start" backgroundColor="white">
          {paymentMethods.map((option) => (
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
                <Text fontSize="12px">{option.expiry}</Text>
              </Box>
              <Box ml="auto">
                <PiDotsThreeOutlineVerticalBold
                  fontSize="18px"
                  color="neutral.90"
                  cursor="pointer"
                />
              </Box>
            </Box>
          ))}
        </VStack>
        <Box
          display="flex"
          alignItems="center"
          marginTop={10}
          backgroundColor="white"
          color="primary.50"
          padding={3}
          width="30%"
          cursor="pointer"
        >
          <AddIcon marginRight={3} />
          New Payment Method
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionPlans;
