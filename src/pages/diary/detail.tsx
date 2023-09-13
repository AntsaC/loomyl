import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DiaryService } from "../../services/DiaryService";
import { Box, Typography } from "@mui/material";
import { DateUtils } from "../../utils/DateUtils";
import "./DiaryDetail.css";
import ProgressAnimation from "../../components/shared/ProgressAnimation";
import { motion } from "framer-motion";

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

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="content-detail"
          dangerouslySetInnerHTML={{ __html: data.content ?? "Empty diary" }}
        />
      </Box>
    );
  }
  return <ProgressAnimation />;
}
