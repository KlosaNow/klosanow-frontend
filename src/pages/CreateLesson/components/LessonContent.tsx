import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const LessonContent = () => {
  const selectedStyle = {
    borderTop: "3px solid #7B58F4",
    color: "#7B58F4",
  };
  return (
    <Box>
      <Text
        fontSize="32px"
        display={["none", "block"]}
        fontWeight="500"
        textColor="black.100"
        marginBottom="30px"
      >
        Create your lessons
      </Text>
      <Tabs
        variant="unstyled"
        position={["fixed", "initial"]}
        bottom="0"
        left="0"
        width="100%"
      >
        <TabList
          backgroundColor="#FAF9FF"
          fontSize="12px"
          color="black.10"
          fontWeight={700}
          display="flex"
          justifyContent="center"
          gap="10%"
        >
          <Tab fontWeight={600} _selected={selectedStyle}>
            Content
          </Tab>
          <Tab fontWeight={600} _selected={selectedStyle}>
            Upload
          </Tab>
          <Tab fontWeight={600} _selected={selectedStyle}>
            OCR
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>Third!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LessonContent;
