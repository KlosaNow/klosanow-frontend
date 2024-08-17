import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { capitalize, uniqueId } from "lodash";

import { EmptyState } from "src/components";
import { Lesson, LessonType } from "src/types";
import { LessonCard, LessonDetailFlyout } from "src/components";
import { deleteLesson, fetchLessons } from "src/api-endpoints/lessons";
import { useStoreDispatch, useStoreSelector } from "src/redux/hooks";
import { createLessonPagePath } from "src/data/pageUrl";
import { CaretDownIcon } from "src/assets/svgs";
import { LESSONS_MOCKDATA } from "../../data/mockdata";
import WatchLessonModal from "../../modals/WatchLessonModal";

interface AllLessonsState {
  type: LessonType;
  showModal: boolean;
  activeLesson: Lesson | null;
  showFlyout: boolean;
}

const AllLessons: React.FC = () => {
  const toast = useToast();
  const dispatch = useStoreDispatch();
  const lesson = useStoreSelector((state) => state.lessons["lessons"]);

  const initialState: AllLessonsState = {
    type: LessonType.Created,
    showModal: false,
    activeLesson: null,
    showFlyout: false,
  };

  const [state, setState] = React.useState(initialState);

  const handleStateUpdate = (newState: Partial<AllLessonsState>) =>
    setState((state) => ({ ...state, ...newState }));

  const lessonData = {
    [LessonType.Created]: [...LESSONS_MOCKDATA, ...lesson.data.data] || [],
    [LessonType.Saved]: [],
  }[state.type];

  const lessonText =
    state.type === LessonType.Created ? LessonType.Saved : LessonType.Created;

  const handleDelete = async (id: string) => {
    const res = await deleteLesson(id);
    if (!res) return;
    toast({
      title: "Deleted succesfully",
      duration: 3000,
      position: "top-right",
      status: "success",
    });
    dispatch(fetchLessons());
  };

  useQuery({
    queryKey: ["lessons"],
    queryFn: () => dispatch(fetchLessons()),
  });

  return (
    <Box>
      <Flex
        align="center"
        mb={{
          base: "56px",
          md: "70px",
        }}
      >
        <Text
          fontSize={{
            base: "24px",
            md: "32px",
          }}
          fontWeight="500"
        >
          {capitalize(state.type)} lessons
        </Text>

        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="lesson"
              icon={<CaretDownIcon />}
              bg="transparent"
              _hover={{ bg: "transparent" }}
            />
          </PopoverTrigger>
          <PopoverContent w="max-content">
            <Box
              as="button"
              onClick={() => handleStateUpdate({ type: lessonText })}
              padding="12px 24px"
              _hover={{
                bg: "#eee",
              }}
            >
              {capitalize(lessonText)} lessons
            </Box>
          </PopoverContent>
        </Popover>
      </Flex>

      <Box>
        {lessonData.length === 0 ? (
          <EmptyState title="lesson" link={createLessonPagePath} />
        ) : (
          <Flex
            justify={{
              base: "center",
              lg: "flex-start",
            }}
            align="center"
            flexWrap="wrap"
            gap="24px"
          >
            {lessonData.map((lesson) => (
              <LessonCard
                lesson={lesson}
                key={uniqueId(`lesson_${lesson.id}`)}
                handleWacth={(activeLesson) =>
                  handleStateUpdate({ showModal: true, activeLesson })
                }
                handleView={(activeLesson) =>
                  handleStateUpdate({ showFlyout: true, activeLesson })
                }
                hasOptions
                handleDelete={handleDelete}
              />
            ))}
          </Flex>
        )}
      </Box>

      <WatchLessonModal
        show={state.showModal}
        handleClose={() => handleStateUpdate({ showModal: false })}
        lesson={state.activeLesson}
      />

      <LessonDetailFlyout
        show={state.showFlyout}
        handleClose={() => handleStateUpdate({ showFlyout: false })}
        lesson={state.activeLesson}
      />
    </Box>
  );
};

export default AllLessons;
