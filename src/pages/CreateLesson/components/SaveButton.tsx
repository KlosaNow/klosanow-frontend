import { Box, Button } from '@chakra-ui/react'
import { SaveButtonInterface } from '../../../types/components/componetInterface'



const SaveButton = ({title}: SaveButtonInterface) => {
  return (
    <Box
        display={["flex"]}
        justifyContent="flex-end"
        marginTop="1.5"
        marginRight="1"
        >
        <Button 
            colorScheme="purple"
            color="#fff"
            variant="solid"
            paddingInline="10"
        >
            {title}
        </Button>
    </Box>
  )
}

export default SaveButton