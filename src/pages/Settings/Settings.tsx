import { Box } from "@chakra-ui/react";
import MobileSettings from "./MobileSettings";
import DesktopSettings from "./DesktopSettings";

export default function Settings(): JSX.Element {
  return (
    <Box padding={["10px 10px 100px", "24px 30px 0"]}>
      <Box display={["none", "block"]}>
        <DesktopSettings />
      </Box>
      <Box display={["block", "none"]}>
        <MobileSettings />
      </Box>
    </Box>
  );
}
