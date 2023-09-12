import { Box } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../main";
import Diary from "../../models/Diary";
import { DiaryService } from "../../services/DiaryService";
import DiaryFormContent from "./DiaryFormContent";
import DiaryFormHeading from "./DiaryFormHeading";

export default function DiaryForm({ initialDiary }: { initialDiary: Diary }) {
  const [diary, setDiary] = useState<Diary>(initialDiary);
  const navigate = useNavigate();

  const mutation = useMutation<any, Error, any>({
    mutationFn: DiaryService.save,
    onSuccess: (resp) => {
      queryClient.invalidateQueries({ queryKey: ["diaries"] });
      navigate(`/diary/${resp.data.id}`);
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
