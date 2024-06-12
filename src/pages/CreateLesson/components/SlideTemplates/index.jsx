import React from 'react'
import SlidesCreation from './SlideCreation';
import './styles.css';

const SlidesTemplateView = ({handleShowVideoBtn}) => {
	return (
		<div>
			<SlidesCreation handleShowVideoBtn={handleShowVideoBtn} />
		</div>
	);
};

export default SlidesTemplateView