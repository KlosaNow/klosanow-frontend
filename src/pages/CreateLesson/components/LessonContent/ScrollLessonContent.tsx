import React from "react";
import { Text } from "@chakra-ui/react";

import { CreateLessonFormStepsType } from "src/types";

import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import { getLessonContentActions } from "../../data";
// import { saveToDrafts, updateDraft } from "src/api-endpoints/lessons";
import { useNavigate } from "react-router-dom";
import { draftsPagePath } from "src/data/pageUrl";

const Editor = React.lazy(() => import("./Editor"));

const ScrollLessonContent: React.FC = () => {
  const navigate = useNavigate();
  const {
    draft_id,
    template,
    form_info,
    content,
    updateCreateLessonFormValues,
  } = React.useContext(CreateLessonFormContext);

  const [value, setValue] = React.useState(content[0] || "");

  const handleProceed = () => {
    updateCreateLessonFormValues({
      activeStep: CreateLessonFormStepsType.Record,
      content: [value],
    });
  };

  const handleDraft = async () => {
    const formData = {
      ...form_info,
      about: form_info.description,
      template,
    };

    // if (draft_id) {
    //   await updateDraft(draft_id, formData);
    // } else {
    //   await saveToDrafts(formData);
    // }

    if (draft_id) {
      // await updateDraft(draft_id, formData);
      console.log({ draft_id, ...formData });
    } else {
      // await saveToDrafts(formData);
      console.log(formData);
    }

    navigate(draftsPagePath);
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
    !value
  );

  return (
    <>
      <Text fontSize="32px" fontWeight="500" mb="24px">
        Create your lessons
      </Text>

      <Editor
        value={value}
        placeholder="Your lesson content goes in here..."
        onChange={setValue}
      />

      {renderActions}
    </>
  );
};

export default ScrollLessonContent;
