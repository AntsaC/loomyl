import { Box } from "@mui/material";
import Heading from "../../components/shared/Heading";
import DiaryGrid from "../../components/diary/DiaryGrid";
import Diary from "../../models/Diary";

const diarts: Diary[] = [
    {
        id:1,
        title: "Nandehandeha tany aminy rova"
    },
    {
        id:2,
        title: "Nandehandeha tany aminy rova"
    },
    {
        id:3,
        title: "Nandehandeha tany aminy rova"
    },
] 

export default function DiaryPage() {
  return (
    <Box>
        <Heading text={"Antsa's diary"} />
        <DiaryGrid
            diarys={diarts}
        />
    </Box>
  )
}
