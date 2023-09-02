import React from 'react';
import ReactDOM from "react-dom/client";

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// "npm install font-awesome --save"
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';

// Render Froala Editor component.
ReactDOM.createRoot(document.getElementById('editor') as HTMLElement).render(
  <FroalaEditorComponent tag='textarea'/>
)
