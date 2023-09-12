import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DiaryService } from "../../services/DiaryService";
import DiaryForm from "../../components/diary/DiaryForm";
import { CircularProgress } from "@mui/material";

export default function DiaryEdit() {
  const { id } = useParams();
  const { data } = useQuery(DiaryService.oneQuery(id!));

  if (data) {
    return <DiaryForm initialDiary={data} />;
  } else {
    return <CircularProgress />;
  }
}
