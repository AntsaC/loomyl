import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import Diary from "../../models/Diary";
import "./DiaryFormHeading.css";
import { Check } from "@mui/icons-material";

interface Prop {
  diary: Diary;
  onTitleChange: (title: string) => void;
  onTimeChange: (time: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function DiaryFormHeading({
  diary,
  onTimeChange,
  onTitleChange,
  onSubmit,
  isLoading,
}: Prop) {
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <input
          className="diary-time"
          value={diary.createdAt}
          onChange={(e) => onTimeChange(e.currentTarget.value)}
          type="datetime-local"
        />
        <IconButton onClick={onSubmit} color="success">
          {isLoading ? <CircularProgress size={"small"} /> : <Check />}
        </IconButton>
      </Stack>
      <input
        placeholder="Diary title"
        value={diary.title}
        onChange={(e) => onTitleChange(e.currentTarget.value)}
        className="diary-title"
      />
      <Divider />
    </Box>
  );
}
