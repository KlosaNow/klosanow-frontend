import React, { useState } from 'react'
import FroalaEditor from 'react-froala-wysiwyg'
// import Froalaeditor from 'froala-editor';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import { config } from '../utils/config';


const FroalaRichTextEditor = () => {
    const [model, setModel] = useState("Example set");

    const handleModelChange = (e: string) => {
        setModel(e);
    }

  return (
    <>
        <FroalaEditor
            tag='textarea'
            config={config}
            // model={model}
            onModelChange={handleModelChange}
        />
    </>
  )
}

export default FroalaRichTextEditor