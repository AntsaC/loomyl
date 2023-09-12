import { Stack } from "@mui/material";
import Diary from "../../models/Diary";
import DiaryGridItem from "./DiaryGridItem";

interface Prop {
  diarys: Diary[];
}

export default function DiaryGrid({ diarys }: Prop) {
  return (
    <Stack marginTop={2} gap={2}>
      {diarys.map((diary) => (
        <DiaryGridItem key={diary.id} diary={diary} />
      ))}
    </Stack>
  );
}
