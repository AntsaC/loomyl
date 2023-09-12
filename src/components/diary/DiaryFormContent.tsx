import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./DiaryFormContent.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Diary from "../../models/Diary";

interface Prop {
  diary: Diary;
  onChange: (content: string) => void;
}

export default function DiaryFormContent({ diary, onChange }: Prop) {
  return (
    <div id="diary-form-content">
      <CKEditor
        editor={ClassicEditor}
        config={{
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading2",
                class: "ck-heading_heading2",
              },
            ],
          },
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "imageUpload",
            "numberedList",
          ],
          language: "fr",
          placeholder: "Commencez à écrire...",
        }}
        data={diary.content}
        onChange={(event, editor) => {
          onChange(editor.getData());
        }}
      />
    </div>
  );
}
