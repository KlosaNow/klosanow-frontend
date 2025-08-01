import React from "react";
import { Box } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  readOnly = false,
  placeholder = "",
}) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["code-block"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
    "code-block",
  ];

  return (
    <Box h="616px">
      <ReactQuill
        theme={"snow"}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        style={{
          height: "100%",
        }}
      />
    </Box>
  );
};

export default Editor;

// import React, { useRef } from "react";
// import { Box } from "@chakra-ui/react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "./PdfBlot"; // 👉 make sure you import the custom blot

// interface EditorProps {
//   value: string;
//   onChange: (value: string) => void;
//   readOnly?: boolean;
//   placeholder?: string;
// }

// const Editor: React.FC<EditorProps> = ({
//   value,
//   onChange,
//   readOnly = false,
//   placeholder = "",
// }) => {
//   const quillRef = useRef<any>(null);

//   const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) {
//       console.log("❌ No file selected.");
//       return;
//     }
//     console.log("📄 File selected:", file.name, file.type);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const base64 = reader.result as string;
//       const quill = quillRef.current?.getEditor();
//       const cursorPosition = quill.getSelection()?.index || 0;

//       console.log("📦 Base64 loaded:", base64.slice(0, 100) + "...");

//       if (!quill) {
//         console.log("❌ Quill instance not found.");
//         return;
//       }

//       if (file.type === "application/pdf") {
//         quill.insertEmbed(cursorPosition, "pdf", base64); // use custom pdf blot
//       } else {
//         quill.insertText(cursorPosition, file.name, "link", base64);
//       }

//       quill.setSelection(cursorPosition + 1);
//     };

//     reader.readAsDataURL(file);
//   };

//   const CustomToolbar = () => (
//     <div id="custom-toolbar">
//       <span className="ql-formats">
//         <select className="ql-header" defaultValue="">
//           <option value="1" />
//           <option value="2" />
//           <option value="" />
//         </select>
//         <select className="ql-font" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-bold" />
//         <button className="ql-italic" />
//         <button className="ql-underline" />
//         <button className="ql-strike" />
//         <button className="ql-blockquote" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-list" value="ordered" />
//         <button className="ql-list" value="bullet" />
//         <button className="ql-indent" value="-1" />
//         <button className="ql-indent" value="+1" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-link" />
//         <button className="ql-image" />
//         <button className="ql-video" />
//         <button className="ql-code-block" />
//       </span>
//       <span className="ql-formats">
//         <select className="ql-color" />
//         <select className="ql-background" />
//         <select className="ql-align" />
//         <button className="ql-clean" />
//       </span>
//       <span className="ql-formats">
//         <label>
//           📎
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             style={{ display: "none" }}
//             onChange={handleDocumentUpload}
//           />
//         </label>
//       </span>
//     </div>
//   );

//   const modules = {
//     toolbar: {
//       container: "#custom-toolbar",
//     },
//   };

//   const formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//     "color",
//     "background",
//     "align",
//     "code-block",
//     "pdf", // 👉 include custom format
//   ];

//   return (
//     <Box h="616px">
//       <CustomToolbar />
//       <ReactQuill
//         ref={quillRef}
//         theme="snow"
//         value={value}
//         onChange={onChange}
//         readOnly={readOnly}
//         placeholder={placeholder}
//         modules={modules}
//         formats={formats}
//         style={{ height: "100%" }}
//       />
//     </Box>
//   );
// };

// export default Editor;
