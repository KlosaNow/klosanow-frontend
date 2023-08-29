import React, { useState, useRef } from "react";
import {
  Input,  
  Box,
  AspectRatio,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { FiFolder } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";



export const UploadUnit = () => {
    const inputRef = useRef(0);
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
  return (
    <Box my="12" >
        <AspectRatio height={204} width="100%" ratio={1}>
            <Box
                borderColor="gray.300"
                borderStyle="dashed"
                borderWidth="2px"
                rounded="md"
                shadow="sm"
                role="group"
                transition="all 150ms ease-in-out"
                _hover={{
                shadow: "md"
                }}
                as={motion.div}
                initial="rest"
                animate="rest"
                whileHover="hover"
                // height={204}
            >
                <Box position="relative" height="100%" width="100%">
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Stack
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justify="center"
                        spacing="4"
                        >
                            <Stack p="8" textAlign="center" spacing="1">
                                <Box 
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="16"
                                    width="100%"                                
                                >
                                    <Box
                                        borderColor="rgba(229, 222, 253, 1)"
                                        borderStyle="solid"
                                        borderWidth="2px"
                                        padding="5"
                                        borderRadius="50"
                                        bgColor="rgba(229, 222, 253, 1)"
                                    >

                                        <FiFolder fontWeight="light" fontSize="25" color="rgba(102, 73, 203, 1)" />
                                    </Box>
                                </Box>
                                <Heading fontSize="sm" color="gray.700" fontWeight="bold" marginTop={3}>
                                <span style={{color: "rgba(102, 73, 203, 1)"}}>Browse</span> and select your files here to upload

                                </Heading>
                                <Text fontWeight="light" fontSize="x-small">Supported Files: MP4, MP3, PNG, JPG</Text>
                            </Stack>
                        </Stack>
                    </Box>
                    <Input
                        type="file"
                        height="100%"
                        width="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity="0"
                        aria-hidden="true"
                        accept="image/*"
                        onDragEnter={startAnimation}
                        onDragLeave={stopAnimation}
                    />
                </Box>
            </Box>
        </AspectRatio>
    </Box>
  );
};

export default UploadUnit;
