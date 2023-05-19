import Select from "react-select";
import { Box } from '@chakra-ui/react';
const options = [
    { value: "+234", label: "+234" },
    { value: "+238", label: "+238" },
    { value: "+224", label: "+224" },
    { value: "+244", label: "+244" },


];
export default function CountrySelect(): JSX.Element {
    return (
        <Box w='145px'>
            <Select options={options} />

        </Box>
    )
}
