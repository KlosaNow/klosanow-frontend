import React from "react";
import { Flex, Text, useToast } from "@chakra-ui/react";

import { CreateLessonFormStepsType } from "src/types";

import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { getLessonContentActions } from "../../data";
import { saveToDrafts, updateDraft } from "src/api-endpoints/lessons";
import { useNavigate } from "react-router-dom";
import { draftsPagePath } from "src/data/pageUrl";
import OverlayLoader from "src/components/OverlayLoader";

const Editor = React.lazy(() => import("./Editor"));

const ScrollLessonContent: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    draft_id,
    template,
    form_info,
    content,
    updateCreateLessonFormValues,
  } = React.useContext(CreateLessonFormContext);

  const [value, setValue] = React.useState(content[0] || "");
  const [loading, setLoading] = React.useState(false);

  const handleProceed = () => {
    updateCreateLessonFormValues({
      activeStep: CreateLessonFormStepsType.Record,
      content: [value],
    });
  };

  const handleDraft = async () => {
    setLoading(true);
    try {
      const formData = {
        ...form_info,
        about: form_info.description,
        content: [value],
        template,
      };

      const draftAction = () =>
        draft_id ? updateDraft(draft_id, formData) : saveToDrafts(formData);

      const res = await draftAction();

      if (!res) throw new Error("Unable to save draft");
      setLoading(false);
      navigate(draftsPagePath);
    } catch (error: any) {
      setLoading(false);
      toast({
        title: error.message ?? error.response ?? "Something went wrong",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const renderActions = getLessonContentActions(
    {
      handleDraft,
      handleBack: () =>
        updateCreateLessonFormValues({
          activeStep: CreateLessonFormStepsType.FormInfo,
        }),
      handleProceed,
    },
    !value,
    true
  );

  return (
    <>
      <OverlayLoader loading={loading} description="Processing draft" />
      <Flex align={"center"} mb="16px" justify={"space-between"}>
        <Text fontSize="24px" fontWeight="500">
          Create your lessons
        </Text>
        {renderActions}
      </Flex>

      <Editor
        value={value}
        placeholder="Your lesson content goes in here..."
        onChange={setValue}
      />
    </>
  );
};

export default ScrollLessonContent;
