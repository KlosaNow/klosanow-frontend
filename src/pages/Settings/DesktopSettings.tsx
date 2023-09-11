import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const DesktopSettings = () => {
  const selectedStyle = {
    borderBottom: "3px solid #7B58F4",
    color: "#7B58F4",
    // padding: "0px",
  };

  const tabStyle = {
    fontSize: "14px",
    padding: "0px 10px",
  };
  return (
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
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
          <TabPanel>6</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DesktopSettings;
