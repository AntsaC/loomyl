import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DiaryService } from "../../services/DiaryService";
import { Box, Typography } from "@mui/material";
import { DateUtils } from "../../utils/DateUtils";
import "./DiaryDetail.css";
import ProgressAnimation from "../../components/shared/ProgressAnimation";

export default function DiaryDetail() {
  const { id } = useParams();

  const { data } = useQuery(DiaryService.oneQuery(id!));

  if (data) {
    return (
      <Box
        sx={{
          color: "rgba(26, 27, 30)",
        }}
      >
        <Typography variant="h1">{data.title}</Typography>
        <h5>{DateUtils.parse(data.createdAt)}</h5>
        <div
          dangerouslySetInnerHTML={{ __html: data.content ?? "Empty diary" }}
        />
      </Box>
    );
  }
  return <ProgressAnimation />;
}
