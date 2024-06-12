// SlideSidebar.jsx
import {Box, Center} from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react';
import {RxCross2} from 'react-icons/rx';

const SlideSidebar = ({slides, onSelectSlide, onDeleteSlide}) => {
	return (
		<Box w='170px' display={slides.length ? 'block' : 'none'}>
			{slides.map((slide, index) => (
				<Center position={'relative'} {...slideCardStyle} key={index} onClick={() => onSelectSlide(index)} transition={'all 200ms ease-in-out'}>
					<span>Slide {index + 1}</span>
					<RxCross2 style={{position:'absolute', right: '7%', top:'9%'}} onClick={() => onDeleteSlide(index)} />
				</Center>
			))}
		</Box>
	);
};

export default SlideSidebar;

const slideCardStyle = {
	cursor: 'pointer',
	padding: '10px',
	marginBottom: '5px',
	backgroundColor: '#191919',
	color: '#FFFFFF',
	borderRadius: '10px',
	height: '100px',
};
