import { Box } from "@mui/material";
import DiaryFormHeading from "../../components/diary/DiaryFormHeading";
import Diary from "../../models/Diary";
import DiaryFormContent from "../../components/diary/DiaryFormContent";
import { useState } from "react";

const initialDiary: Diary = {
  id: 1,
  title: "",
  content: "",
  createdAt: new Date().toISOString().slice(0, 16),
};

export default function DiaryForm() {
  const [diary, setDiary] = useState<Diary>(initialDiary);

  return (
    <Box>
      <DiaryFormHeading
        diary={diary}
        onTitleChange={(title) => {
          setDiary({ ...diary, title: title });
        }}
        onTimeChange={(time) => {
          setDiary({ ...diary, createdAt: time });
        }}
      />
      <DiaryFormContent
        diary={diary}
        onChange={(content) => setDiary({ ...diary, content: content })}
      />
    </Box>
  );
}
