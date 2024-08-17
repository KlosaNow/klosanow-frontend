import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  CreateLessonFormContext,
  CreateLessonFormDefaultValues,
  DefaultFormValues,
} from "../../context/CreateLessonFormContext";
import { CREATE_LESSON_STEPS } from "../../data";
import { useStoreSelector } from "src/redux/hooks";
import { CreateLessonFormStepsType, LessonTemplateType } from "src/types";
import RecordVideoModal from "../../modals/RecordVideoModal";
import { clearDraftId, getDraftId } from "src/utils/constant";
import { DRAFTS_MOCKDATA } from "../../data/mockdata";

const CreateLessonForm: React.FC = () => {
  const [_, setSearchParams] = useSearchParams();

  const drafts = useStoreSelector((state) => state.lessons["drafts"]);
  const user = useStoreSelector((state) => state.user["data"]);

  const draft_id = getDraftId();

  const draftData = [...DRAFTS_MOCKDATA, ...drafts.data.data].find(
    (item) => item.id === draft_id
  );

  const step = React.useMemo(() => {
    if (draft_id) return CreateLessonFormStepsType.FormInfo;
    else return CreateLessonFormStepsType.Template;
  }, [draft_id]);

  const [state, setState] = React.useState<CreateLessonFormDefaultValues>({
    ...DefaultFormValues,
    activeStep: step,
    draft_id: draft_id || "",
    form_info: {
      title: draftData?.title || "",
      description: draftData?.about || "",
      thumbnail: draftData?.thumbnail || "",
      tutor_name: user?.name || "",
      tutor_bio: user?.bio || "",
      thumbnailSize: draftData?.thumbnailSize || 0,
    },
    template: draftData?.template || LessonTemplateType.Scroll,
    content: draftData?.content || [],
  });

  const lessonSteps = state.activeStep
    ? CREATE_LESSON_STEPS[state.activeStep]
    : CREATE_LESSON_STEPS.template;

  const handleStateUpdate = (
    newState: Partial<CreateLessonFormDefaultValues>
  ) => setState((state) => ({ ...state, ...newState }));

  const handleDraftId = React.useCallback(() => {
    if (draft_id) {
      handleStateUpdate({ draft_id });
      clearDraftId();
    }
  }, [draft_id]);

  React.useEffect(() => {
    setSearchParams({ step: lessonSteps.name });
  }, [state.activeStep]);

  React.useEffect(() => {
    handleDraftId();
  }, [draft_id]);

  return (
    <CreateLessonFormContext.Provider
      value={{
        ...state,
        updateCreateLessonFormValues: handleStateUpdate,
      }}
    >
      {lessonSteps.component}
      <RecordVideoModal
        show={state.showRecordLessonModal}
        handleClose={() => handleStateUpdate({ showRecordLessonModal: false })}
      />
    </CreateLessonFormContext.Provider>
  );
};

export default CreateLessonForm;
