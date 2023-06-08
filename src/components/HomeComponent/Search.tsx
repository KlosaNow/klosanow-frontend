import { Box } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs'
import '../../styles/Search.scss'

export const Search = () => {
  return (
    <Box mb={5}>
      <form className='search'>
        <button type='submit'>
          <BsSearch />
        </button>
        <input
          type='text'
          placeholder='Search for a lesson'
        />
      </form>
    </Box>
  );
}



