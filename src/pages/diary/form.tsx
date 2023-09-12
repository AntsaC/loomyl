import { Box } from "@mui/material";
import DiaryFormHeading from "../../components/diary/DiaryFormHeading";
import Diary from "../../models/Diary";
import DiaryFormContent from "../../components/diary/DiaryFormContent";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { DiaryService } from "../../services/DiaryService";
import { queryClient } from "../../main";

const initialDiary: Diary = {
  title: "",
  content: "",
  createdAt: new Date().toISOString().slice(0, 16),
};

export default function DiaryForm() {
  const [diary, setDiary] = useState<Diary>(initialDiary);

  const mutation = useMutation<any, Error, any>({
    mutationFn: DiaryService.save,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diaries"] });
    },
  });

  function handleOnSubmit() {
    mutation.mutate(diary);
  }

  return (
    <Box>
      <DiaryFormHeading
        onSubmit={handleOnSubmit}
        isLoading={mutation.isLoading}
        diary={diary}
        onTitleChange={(title) => {
          setDiary({ ...diary, title: title });
        }}
        onTimeChange={(time) => {
          setDiary({ ...diary, createdAt: time });
          console.log(time);
        }}
      />
      <DiaryFormContent
        diary={diary}
        onChange={(content) => setDiary({ ...diary, content: content })}
      />
    </Box>
  );
}
