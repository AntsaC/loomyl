import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./DiaryFormContent.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Diary from "../../models/Diary";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

interface Prop {
  diary: Diary;
  onChange: (content: string) => void;
}

export default function DiaryFormContent({ diary, onChange }: Prop) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                model: "heading2",
                view: "h",
                title: "Heading",
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
            "bulletedList",
          ],
          language: "fr",
          placeholder: "Commencez à écrire...",
        }}
        data={diary.content}
        onChange={(_event, editor) => {
          onChange(editor.getData());
        }}
      />
      {visible && (
        <Fab
          size="small"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <ArrowUpward />
        </Fab>
      )}
    </div>
  );
}
