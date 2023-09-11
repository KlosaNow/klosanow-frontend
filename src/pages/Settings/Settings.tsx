import { Box } from "@chakra-ui/react";
import MobileSettings from "./MobileSettings";
import DesktopSettings from "./DesktopSettings";

export default function Settings(): JSX.Element {
  return (
    <>
      <Box display={["none", "block"]}>
        <DesktopSettings />
      </Box>
      <Box display={["block", "none"]}>
        <MobileSettings />
      </Box>
    </>
  );
}
