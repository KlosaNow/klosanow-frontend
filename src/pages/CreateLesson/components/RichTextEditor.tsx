// components/TextEditor.tsx
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const NewRichTextEditor: React.FC<TextEditorProps> = ({ value, onChange, readOnly = false, placeholder = '' }) => {
const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['code-block']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background',
  'align',
  'code-block'
];

  return (
    <ReactQuill
      theme={'snow'}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      modules={modules}
      formats={formats} 
      style={{
        height: '680px',
        // paddingBottom: '40px',
        // borderRadius: '20px',
        // border: '1px solid lightgray'
      }}
    />
  );
};



import { Formik, Form, Field,  } from 'formik';
import { Button, FormControl, FormLabel, Input, Stack, VStack } from '@chakra-ui/react';
import { object, string  } from 'yup';
import { FormikStepComponentProps } from '../../../types/components/componetInterface';

// interface FormValues {
//   name: string;
//   content: string;
// }

// const validationSchema: {
//   name: string,
//   content: string,
// };

export const TextEditorSectionComponent: React.FC = ({ handleShowVideoBtn }: FormikStepComponentProps) => {
  const [textContent, setTextContent] = useState<string>('');
  const pendingDataString = localStorage.getItem("CREATE_LESSON_DATA");
  const pendingData = pendingDataString ? JSON.parse(pendingDataString) : null;


  const handleSubmit = () => {
    // console.log(textContent);
    localStorage.setItem("CREATE_LESSON_DATA", JSON.stringify({ ...pendingData, lessonContent: textContent }));
    handleShowVideoBtn()
  };

  return (
  
          <Stack spacing="4" mt="25px" w="full">
                <NewRichTextEditor
                  value={textContent}
                  placeholder='Your lesson content goes in here...'
                  onChange={e => setTextContent(e)}
                />
            <Button mt="70px" color={'#FFFFFF'} ml="auto" onClick={handleSubmit} borderRadius= '10px' background= '#7B58F4' width= '166px' padding= '6px 18px' >Save</Button>
          </Stack>
 
  );
};

export default TextEditorSectionComponent;

