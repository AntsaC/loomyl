import { Box, Fab } from "@mui/material";
import Heading from "../../components/shared/Heading";
import DiaryGrid from "../../components/diary/DiaryGrid";
import Diary from "../../models/Diary";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const diarts: Diary[] = [
  {
    id: 1,
    title: "Nandehandeha tany aminy rova",
    createdAt: "",
  },
  {
    id: 2,
    title: "Nandehandeha tany aminy rova",
    createdAt: "",
  },
  {
    id: 3,
    title: "Nandehandeha tany aminy rova",
    createdAt: "",
  },
];

export default function DiaryPage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Fab onClick={() => navigate("/form")}>
        <Add />
      </Fab>
      <Heading text={"Antsa's diary"} />
      <DiaryGrid diarys={diarts} />
    </Box>
  );
}
