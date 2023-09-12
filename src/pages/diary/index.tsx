import { Box, Fab } from "@mui/material";
import Heading from "../../components/shared/Heading";
import DiaryGrid from "../../components/diary/DiaryGrid";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DiaryService } from "../../services/DiaryService";
import ProgressAnimation from "../../components/shared/ProgressAnimation";

export default function DiaryPage() {
  const navigate = useNavigate();
  const { data } = useQuery(DiaryService.allQuery());

  return (
    <Box>
      <Fab onClick={() => navigate("/form")}>
        <Add />
      </Fab>
      <Heading text={"Our diaries"} />
      {data ? <DiaryGrid diarys={data} /> : <ProgressAnimation />}
    </Box>
  );
}
