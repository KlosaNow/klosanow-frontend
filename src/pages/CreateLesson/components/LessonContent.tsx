import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import FroalaRichTextEditor from "./Content/RichTextEditor/FroalaTextEditor";
import { useState } from "react";
import UploadUnit from "./UploadFile";
import SaveButton from "./SaveButton";
import OcrUpload from "./OcrUpload";
import { FormikStepComponentProps } from "../../../types/components/componetInterface";

const LessonContent = ({ nextFunc }: FormikStepComponentProps) => {
  const selectedStyle = {
    borderTop: "3px solid #7B58F4",
    color: "#7B58F4",
  };
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Box>
      <Text
        fontSize="32px"
        // display={["none", "block"]}
        fontWeight="500"
        textColor="black.100"
        marginBottom="30px"
      >
        Create your lessons
      </Text>
      <Tabs
        variant="unstyled"
        // position={["fixed", "initial"]}
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
            <Box
            // w={[400, 600, 850]}
            // h={[80, 150, 450]}
            >
              <FroalaRichTextEditor />
              <SaveButton title="Save" />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Box>
                <UploadUnit />
              </Box>
              <SaveButton title="Save" />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Box>
                <OcrUpload />
              </Box>
              <SaveButton title="Save" />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button onClick={nextFunc}>Next</Button>
    </Box>
  );
};

export default LessonContent;
