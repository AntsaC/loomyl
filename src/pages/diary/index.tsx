import { Box, Fab } from "@mui/material";
import Heading from "../../components/shared/Heading";
import DiaryGrid from "../../components/diary/DiaryGrid";
import Diary from "../../models/Diary";
import Add from "@mui/icons-material/Add";

const diarts: Diary[] = [
  {
    id: 1,
    title: "Nandehandeha tany aminy rova",
  },
  {
    id: 2,
    title: "Nandehandeha tany aminy rova",
  },
  {
    id: 3,
    title: "Nandehandeha tany aminy rova",
  },
  {
    id: 4,
    title: "Nandehandeha tany aminy rova",
  },
  {
    id: 5,
    title: "Nandehandeha tany aminy rova",
  },
];

export default function DiaryPage() {
  return (
    <Box>
      <Fab>
        <Add />
      </Fab>
      <Heading text={"Antsa's diary"} />
      <DiaryGrid diarys={diarts} />
    </Box>
  );
}
