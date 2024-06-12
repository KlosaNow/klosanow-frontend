import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import UploadUnit from "./UploadFile";
import SaveButton from "./SaveButton";
import OcrUpload from "./OcrUpload";
import { FormikStepComponentProps } from "../../../types/components/componetInterface";
import TextEditorSectionComponent from "./RichTextEditor";
import { useNavigate } from "react-router-dom";

const LessonContent = ({ nextFunc }: FormikStepComponentProps) => {
  const navigate = useNavigate()
  const [showBtn, setShowBtn] = useState(false)
  const selectedStyle = {
    borderTop: "3px solid #7B58F4",
    color: "#7B58F4",
  };
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleShowVideoBtn = () => {
    setShowBtn(true)
  }
  return (
    <Box position={'relative'}>
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
          display="none"
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
              <TextEditorSectionComponent />
              
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
      {/* {showBtn && <Button position="absolute" bottom={4} right={'20%'} onClick={()=> navigate('/create-lesson/record-video')}>Proceed to Record</Button>} */}
    </Box>
  );
};

export default LessonContent;
