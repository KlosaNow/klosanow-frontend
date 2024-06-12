import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { NewRichTextEditor } from '../RichTextEditor';

const SlideEditor = ({content, onContentChange}) => {
	const handleChange = (val) => {
		onContentChange(val);
	};

	return <NewRichTextEditor value={content} placeholder='Your lesson content goes in here...' onChange={handleChange} />;
};

export default SlideEditor;
