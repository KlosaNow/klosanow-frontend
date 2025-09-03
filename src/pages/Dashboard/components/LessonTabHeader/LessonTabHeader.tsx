import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { allLessonsPagePath } from "../../../../data/pageUrl";
import { uniqueId } from "lodash";
import { DashboardState } from "../../Dashboard";
import { LessonType } from "src/types";

interface LessonTabHeaderProps {
  handleStateUpdate: (x: Partial<DashboardState>) => void;
}

const LessonTabHeader: React.FC<LessonTabHeaderProps> = ({
  handleStateUpdate,
}) => {
  const DASHBOARD_MENU = [
    {
      label: "Created Lessons",
      lessonType: LessonType.Created,
    },
    {
      label: "Saved Lessons",
      lessonType: LessonType.Saved,
    },
  ];

  const tabStyle = {
    color: "#7B58F4",
    borderColor: "#7B58F4",
  };

  const tabProps = {
    _selected: tabStyle,
    color: "#808080",
    padding: "8px 2px",
    fontWeight: 600,
  };

  return (
    <Box position="relative">
      <Box display={["none", "block"]} mb="25px">
        <Tabs width="full">
          <TabList gap="20px">
            {DASHBOARD_MENU.map(({ label, lessonType }) => (
              <Tab
                key={uniqueId("dashboard-tab-list")}
                onClick={() => handleStateUpdate({ lessonType })}
                {...tabProps}
              >
                {label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Box>

      <Box display={["block", "none"]}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BsChevronDown />}
            bg="transparent"
            p={0}
          >
            {"Created Lessons"}
          </MenuButton>

          <MenuList>
            {DASHBOARD_MENU.map(({ label, lessonType }) => (
              <MenuItem
                key={uniqueId("dashboard-menu-item")}
                onClick={() => handleStateUpdate({ lessonType })}
                bg="transparent"
              >
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Box as="span" position="absolute" right="0" top="10px">
        <ChakraLink as={ReactRouterLink} to={allLessonsPagePath}>
          View all
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default LessonTabHeader;
