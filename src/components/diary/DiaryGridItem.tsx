import { Grid, Typography } from "@mui/material";
import Diary from "../../models/Diary";
import "./DiaryGridItem.css";
import { grey } from "@mui/material/colors";
import { DateUtils } from "../../utils/DateUtils";

interface Prop {
  diary: Diary;
}

export default function DiaryGridItem({ diary }: Prop) {
  return (
    <div className="grid-item">
      <Typography variant="h6" fontSize={14} color={grey[100]}>
        {DateUtils.parse(diary.createdAt)}
      </Typography>
      <Typography marginTop={1} variant="h5">
        {diary.title}
      </Typography>
    </div>
  );
}
