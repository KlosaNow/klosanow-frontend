import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiBell } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

interface DashboardHeaderMobileProps {
  notificationLength: number;
}

const DashboardHeaderMobile: React.FC<DashboardHeaderMobileProps> = ({
  notificationLength,
}) => {
  return (
    <Flex justify={"space-between"} align={"center"} display={["flex", "none"]}>
      <HiUserCircle fontSize="70px" />
      <Link to="/notifications" style={{ position: "relative" }}>
        <BiBell fontSize={25} />
        <Text
          style={{
            display: "flex",
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor: "red",
            top: "0px",
            right: "0px",
            fontSize: "9px",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            borderRadius: "50%",
          }}
        >
          {notificationLength}
        </Text>
      </Link>
    </Flex>
  );
};

export default DashboardHeaderMobile;
