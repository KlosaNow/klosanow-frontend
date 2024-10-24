import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import SubscriptionModal from "../../components/Modals/SubscriptionModal/SubscriptionModal";
import { useState } from "react";
import SubscriptionPlans from "./components/SubscriptionPlans";

const DesktopSettings = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
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

  // const allPlans = [
  //   {
  //     id: "1",
  //     plan: "Free Plan",
  //     amount: "₦0",
  //     benefits: [
  //       "1.2GB storage",
  //       "Create Open Study Group",
  //       "Create & Receive Video Lessons",
  //       "Create & Receive Video Lessons",
  //     ],
  //     status: "Subscribed",
  //   },
  //   {
  //     id: "2",
  //     plan: "Basic",
  //     amount: "₦1,500",
  //     benefits: [
  //       "5GB storage",
  //       "Create Open Study Group",
  //       "Create & Receive Video Lessons",
  //       "Create & Receive Video Lessons",
  //     ],
  //     status: "Choose Plan",
  //   },
  //   {
  //     id: "3",
  //     plan: "Premium",
  //     amount: "₦5,000",
  //     benefits: [
  //       "Unlimited Storage",
  //       "Create Open & Study Group",
  //       "Create & Receive Video Lessons",
  //       "Create Channels",
  //     ],
  //     status: "Choose Plan",
  //   },
  // ];

  // const paymentMethods = [
  //   {
  //     id: "1",
  //     name: "payment1",
  //     number: "**** **** **** 8976",
  //     expiry: "Expiry 10/24",
  //     icon: MasterCard,
  //   },
  //   {
  //     id: "2",
  //     name: "payment2",
  //     number: "**** **** **** 1234",
  //     expiry: "Expiry 09/23",
  //     icon: MasterCard,
  //   },
  // ];

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
          <TabList gap="20px" color="neutral.80" border="0px" overflow="scroll">
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
              <SubscriptionPlans openModal={openModal} />
            </TabPanel>
            <TabPanel>4</TabPanel>
            <TabPanel>5</TabPanel>
            <TabPanel>6</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DesktopSettings;
