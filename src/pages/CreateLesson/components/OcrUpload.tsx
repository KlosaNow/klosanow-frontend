import { AspectRatio, Box, Stack, Heading, Input, Text } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { MdOutlineDocumentScanner } from 'react-icons/md'

const OcrUpload = () => {
const controls = useAnimation();
const startAnimation = () => controls.start("hover");
const stopAnimation = () => controls.stop();
  return (
    <Box my="12" >
        <AspectRatio height={204} width="" ratio={1}>
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
                                    >
                                        <MdOutlineDocumentScanner fontWeight="light" fontSize={100} color="rgba(102, 73, 203, 1)" />
                                    </Box>
                                </Box>
                                <Text fontSize="sm" color="gray.700" fontWeight="bold" marginTop={3}>OCR</Text>                           
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
  )
}

export default OcrUpload