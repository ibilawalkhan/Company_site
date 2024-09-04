import React, { useRef } from 'react';
import { Container } from '../components/index';
import { Editor } from '@tinymce/tinymce-react'; 

function AdminBlog() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Container>
      <Editor
        apiKey="wxseuzoxqaz9vqy1x09l28o6rz27xthhelsq4xnnnrt54saq"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "preview powerpaste searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media advtemplate codesample table charmap pagebreak anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker formatpainter quickbars emoticons",
          ],
          toolbar:
            "undo redo | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons | code fullscreen preview | save print export | pagebreak anchor codesample",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </Container>
  );
}

export default AdminBlog;
