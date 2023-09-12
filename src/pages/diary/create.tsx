import { Box } from "@mui/material";
import DiaryFormHeading from "../../components/diary/DiaryFormHeading";
import Diary from "../../models/Diary";
import DiaryFormContent from "../../components/diary/DiaryFormContent";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { DiaryService } from "../../services/DiaryService";
import { queryClient } from "../../main";
import { useLocation, useNavigate } from "react-router-dom";
import DiaryForm from "../../components/diary/DiaryForm";

const initialDiary: Diary = {
  title: "",
  content: "",
  createdAt: new Date().toISOString().slice(0, 16),
};

export default function DiaryCreate() {
  return <DiaryForm initialDiary={initialDiary} />;
}
