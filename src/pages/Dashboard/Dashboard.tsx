import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Search } from "../../components/Search/Search";

import { EmptyState, LessonCard } from "../../components";

import DashboardHeaderMobile from "./components/DashboardHeaderMobile";
import LessonTabHeader from "./components/LessonTabHeader";
import { uniqueId } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { fetchLessons } from "../../api-endpoints/lessons/actions";
import { useStoreDispatch, useStoreSelector } from "../../redux/hooks";
import { Lesson, LessonType } from "src/types";
import { createLessonPagePath } from "src/data/pageUrl";
import { DEVICE_SCREEN_SIZES } from "src/data/constants";
import { WatchLessonModal } from "../CreateLesson";

export interface DashboardState {
  lessonType: LessonType;
  isMobile: boolean;
  showVideo: boolean;
  activeLesson: Lesson | null;
}

const Dashboard: React.FC = () => {
  const dispatch = useStoreDispatch();

  const user = useStoreSelector((state) => state["user"]);
  const lessons = useStoreSelector((state) => state.lessons["lessons"]);

  const initialState: DashboardState = {
    lessonType: LessonType.Created,
    isMobile: window.innerWidth <= DEVICE_SCREEN_SIZES.mobile_standard,
    showVideo: false,
    activeLesson: null,
  };

  const [state, setState] = React.useState<DashboardState>(initialState);

  const handleStateUpdate = (newState: Partial<DashboardState>) =>
    setState((state) => ({ ...state, ...newState }));

  const createdLesson = lessons.data || [];

  const lessonData = {
    [LessonType.Created]: createdLesson,
    [LessonType.Saved]: [],
  }[state.lessonType].slice(0, 5);

  const latestLessonArr = [...createdLesson].reverse();

  const latestLesson = state.isMobile
    ? latestLessonArr.slice(0, 1)
    : latestLessonArr.slice(0, 3);

  React.useEffect(() => {
    const handleResize = () =>
      handleStateUpdate({
        isMobile: window.innerWidth <= DEVICE_SCREEN_SIZES.mobile_standard,
      });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useQuery({
    queryKey: ["lessons"],
    queryFn: () => dispatch(fetchLessons()),
  });

  return (
    <Box width="full" paddingX={1} height="full" margin={["auto", "0px"]}>
      <DashboardHeaderMobile notificationLength={3} />

      <Text
        mr={2}
        fontSize="2xl"
        fontWeight="bold"
        fontFamily="inherit"
        color={["#D9927B", "#000"]}
      >
        Hello {user.data?.name},
      </Text>
      <Text color="#000" display={["none", "block"]} marginBottom="20px">
        Your latest lesson is here
      </Text>

      <Box>
        <Box display={["block", "none"]}>
          <Search />
          <Text fontSize={12} fontWeight={600} mb={2}>
            Latest Created Lesson
          </Text>
        </Box>

        <Box>
          {latestLesson.length !== 0 && (
            <Flex
              align="center"
              gap="24px"
              overflowX={"scroll"}
              w="100%"
              maxW="1108px"
            >
              {latestLesson.map((lesson) => (
                <LessonCard
                  lesson={lesson}
                  key={uniqueId(`lesson_${lesson._id}`)}
                  hasDescription={false}
                  hasWatch={false}
                  handleWatch={(activeLesson) =>
                    handleStateUpdate({ showVideo: true, activeLesson })
                  }
                  width="sm"
                />
              ))}
            </Flex>
          )}
        </Box>

        <Box
          marginY={6}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <LessonTabHeader handleStateUpdate={handleStateUpdate} />

          <Box>
            {lessonData.length === 0 ? (
              <EmptyState
                title="lesson"
                link={createLessonPagePath}
                height="sm"
              />
            ) : (
              <Flex
                align="center"
                gap="24px"
                overflowX={"scroll"}
                w="100%"
                maxW="1108px"
              >
                {lessonData.map((lesson) => (
                  <LessonCard
                    lesson={lesson}
                    key={uniqueId(`lesson_${lesson._id}`)}
                    hasWatch={false}
                    descriptionLength={70}
                    width="sm"
                    handleWatch={(activeLesson) =>
                      handleStateUpdate({ showVideo: true, activeLesson })
                    }
                  />
                ))}
              </Flex>
            )}
          </Box>
        </Box>
      </Box>

      <WatchLessonModal
        show={state.showVideo}
        lesson={state.activeLesson}
        handleClose={() =>
          handleStateUpdate({ showVideo: false, activeLesson: null })
        }
      />
    </Box>
  );
};

export default Dashboard;
