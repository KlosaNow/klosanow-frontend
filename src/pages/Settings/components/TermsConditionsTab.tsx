import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CheckBox } from "../../../components/CheckBox";

const TermsConditionsTab = () => {
  return (
    <Box padding="1rem" minHeight="100vh">
      <Flex flexDirection="column" flex={1} overflowY="auto">
        <Text color="#2A2A2A" fontSize={20} fontWeight={500}>
          KLOSANOW TERMS AND CONDITIONS
        </Text>

        <ul
          style={{
            color: "#2A2A2A",
            fontSize: 18,
            lineHeight: "31.32px",
            maxHeight: "calc(100vh - 200px)",
            overflowY: "scroll",
            marginTop: "2rem",
            listStyleType: "disc",
            paddingInlineStart: "20px",
          }}
        >
          <li>
            Lorem ipsum dolor sit amet consectetur. Aliquet neque sem auctor
            massa accumsan ridiculus auctor.
          </li>
          <li>
            Urna rhoncus commodo pellentesque dui. Facilisis pellentesque vitae
            faucibus semper.
          </li>
          <li>
            Varius mauris varius dictum quam elementum proin ut lectus placerat.
            Dolor morbi velit euismod enim malesuada tortor.
          </li>
          <li>
            Pharetra est molestie porttitor blandit. Congue elementum est urna
            pellentesque commodo semper diam.
          </li>
          <li>
            Ipsum varius massa quis commodo diam blandit. Platea tempor
            adipiscing eu sodales ipsum nec.
          </li>
          <li>
            Volutpat egestas pharetra tristique morbi arcu molestie nunc
            phasellus ipsum.
          </li>
          <li>Quam elit purus at montes amet mollis amet faucibus. </li>
          <li>
            Nunc pharetra montes ut nullam. Proin nec ac viverra elementum vitae
            elementum pharetra arcu ultrices.
          </li>
          <li>
            Nulla nec accumsan volutpat sit at eget viverra. Eget sodales massa
            arcu commodo donec. Rhoncus libero hendrerit urna amet mauris
            adipiscing amet sit scelerisque.
          </li>
          <li>
            Ultrices nulla feugiat purus dignissim sapien enim est porttitor ut.
          </li>
          <li>
            Gravida consequat tellus lorem fringilla vestibulum elit donec
            ornare suscipit.
          </li>
          <li>
            Tincidunt quisque potenti dignissim aliquet elit ac fermentum.
          </li>
          <li>
            Nunc pharetra montes ut nullam. Proin nec ac viverra elementum vitae
            elementum pharetra arcu ultrices.
          </li>
          <li>
            Nunc pharetra montes ut nullam. Proin nec ac viverra elementum vitae
            elementum pharetra arcu ultrices.
          </li>
          <li>
            Nunc pharetra montes ut nullam. Proin nec ac viverra elementum vitae
            elementum pharetra arcu ultrices.
          </li>
          <li>
            Nulla nec accumsan volutpat sit at eget viverra. Eget sodales massa
            arcu commodo donec. Rhoncus libero hendrerit urna amet m
          </li>
        </ul>
      </Flex>

      <Flex
        background="#E5DEFD"
        justifyContent="space-between"
        marginTop="2rem"
        padding={4}
        position="sticky"
        bottom={0}
        zIndex={1}
      >
        <Flex gap={3} marginTop="0.5rem">
          <CheckBox label="I have read and agree with the terms & Conditions" />
        </Flex>

        <Button
          background="#7B58F4"
          borderRadius={4}
          color="#FFFFFF"
          fontWeight={500}
          padding="15px 20px"
        >
          Withdraw Consent
        </Button>
      </Flex>
    </Box>
  );
};

export default TermsConditionsTab;