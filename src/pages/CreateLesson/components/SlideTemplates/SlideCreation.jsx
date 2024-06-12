// SlidesCreation.jsx
import React, {useState} from 'react';
import SlideEditor from './SlideEditor';
import SlideSidebar from './SlideSidebar';
import {Box, Button, Flex, HStack} from '@chakra-ui/react';

const SlidesCreation = ({handleShowVideoBtn}) => {
	const [slides, setSlides] = useState([]);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(null);
	const [editorContent, setEditorContent] = useState('');
	const [isEditing, setIsEditing] = useState(false);

	const pendingDataString = localStorage.getItem('CREATE_LESSON_DATA');
	const pendingData = pendingDataString ? JSON.parse(pendingDataString) : null;

	const handleSaveSlide = () => {
		if (isEditing && currentSlideIndex !== null) {
			const updatedSlides = slides.map((slide, index) => (index === currentSlideIndex ? {...slide, content: editorContent} : slide));
			setSlides(updatedSlides);
		} else {
			const newSlide = {
				id: slides.length + 1,
				content: editorContent,
				timestamp: new Date().toISOString(),
			};
			setSlides([...slides, newSlide]);
		}
		setEditorContent('');
		setIsEditing(false);
		setCurrentSlideIndex(null);
	};

	const handleSelectSlide = (index) => {
		setCurrentSlideIndex(index);
		setEditorContent(slides[index].content);
		setIsEditing(true);
	};

  const handleDeleteSlide = (index) => {
		const updatedSlides = slides.filter((_, slideIndex) => slideIndex !== index);
		setSlides(updatedSlides);
		setEditorContent('');
		setIsEditing(false);
		setCurrentSlideIndex(null);
	};
	const handleContentChange = (content) => {
		setEditorContent(content);
	};

	const handleSubmitSlides = () => {
		console.log('Slides submitted:', slides);
		localStorage.setItem('CREATE_LESSON_DATA', JSON.stringify({...pendingData, lessonSlides: slides}));
 	};

	return (
		<Box>
			{!!(editorContent == '') ? null : (
				<HStack spacing={'10px'} justify={'flex-end'} w='full' mb={4} mr={4}>
					<Button onClick={handleSaveSlide} color={'#7B58F4'} ml='auto' borderRadius='10px' background='transparent' width='fit-content' padding='6px 18px' border={'1px solid #7B58F4'}>
						{isEditing ? 'Update' : 'Save'}
					</Button>
					<Button onClick={handleSubmitSlides} color={'#FFFFFF'} borderRadius='10px' background='#191919' width='fit-content' padding='6px 18px'>
						Submit All Slides
					</Button>
				</HStack>
			)}
			<Flex gap={6}>
				<SlideSidebar slides={slides} onSelectSlide={handleSelectSlide} onDeleteSlide={handleDeleteSlide} />
				<SlideEditor content={editorContent} onContentChange={handleContentChange} />
			</Flex>
		</Box>
	);
};

export default SlidesCreation;
