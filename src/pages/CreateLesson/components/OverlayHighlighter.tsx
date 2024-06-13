import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import { BsHandIndexThumb } from 'react-icons/bs';

const Overlay = () => {
  const [draggedOff, setDraggedOff] = useState(false);
  const [startY, setStartY] = useState(0);
  const [overlayHeight, setOverlayHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = e.clientY - startY;
    const newHeight = Math.max(0, window.innerHeight - deltaY);
    const scrollDiff = overlayHeight - newHeight;
    setOverlayHeight(newHeight);
    setDraggedOff(deltaY > 0);
    setScrollPosition((prev) => prev + scrollDiff);
      window.scrollTo(0, scrollPosition);
  };

    const handleMouseDown = (e: MouseEvent) => {
    setStartY(0);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setScrollPosition(target.scrollTop);
  };

  return (
    <Box
      backgroundColor='rgba(0, 0, 0, 0.55)'
      transition='height 0.7s, background-color 0.7s'
      w='full'
      style={{ height: draggedOff ? overlayHeight : '76vh' }}
      position='absolute'
          zIndex={10000}
          p="10px 20px"
          borderRadius={'20px'}
        
      onScroll={handleScroll}
    >
        <Box cursor={'pointer'} className='drag-handle' onMouseDown={handleMouseDown} >
          <BsHandIndexThumb fontSize={40} color='#FFFFFF' />
        </Box>
  
    </Box>
  );
};

export default Overlay;



// import React, { useState } from 'react';
// import { FaGripLines } from 'react-icons/fa';
// import { Box } from '@chakra-ui/react';
// import { BsHandIndexThumb } from 'react-icons/bs';

// const Overlay = () => {
//   const [draggedOff, setDraggedOff] = useState(false);
//   const [startY, setStartY] = useState(0);
//   const [overlayOffset, setOverlayOffset] = useState(12);

//   const handleMouseDown = (e) => {
//     // setStartY(e.clientY);
//     setOverlayOffset(0);
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

//   const handleMouseMove = (e) => {
//     const deltaY = e.clientY - startY;
//     setOverlayOffset(deltaY);
//     setDraggedOff(deltaY > 0);
//   };

//   const handleMouseUp = () => {
//     document.removeEventListener('mousemove', handleMouseMove);
//     document.removeEventListener('mouseup', handleMouseUp);
//   };

//   return (
//     <Box
//       backgroundColor='rgba(0, 0, 0, 0.65)'
//       transition='transform 0.3s, background-color 0.7s'
//       w='full'
//           h='66vh'
//       position='absolute'
//           zIndex={10000}
//           p="10px 15px"
// borderRadius={'20px'}      top={overlayOffset}
//       style={{ transform: `translateY(${overlayOffset}px)` }}
//       onScroll={(e) => e.preventDefault()}
//     >
//       <Box cursor='pointer' className='drag-handle' onMouseDown={handleMouseDown}>
//         <BsHandIndexThumb fontSize={40} color='#FFFFFF' />
//       </Box>
//     </Box>
//   );
// };

// export default Overlay;


