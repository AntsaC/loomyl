import { Stack } from "@mui/material";
import Diary from "../../models/Diary";
import DiaryGridItem from "./DiaryGridItem";
import { motion } from "framer-motion";

interface Prop {
  diarys: Diary[];
}

export default function DiaryGrid({ diarys }: Prop) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Stack marginTop={2} gap={2}>
        {diarys.map((diary) => (
          <DiaryGridItem key={diary.id} diary={diary} />
        ))}
      </Stack>
    </motion.div>
  );
}
