import Diary from "../../models/Diary";
import DiaryForm from "../../components/diary/DiaryForm";

const initialDiary: Diary = {
  title: "",
  content: "",
  createdAt: new Date().toISOString().slice(0, 16),
};

export default function DiaryCreate() {
  return <DiaryForm initialDiary={initialDiary} />;
}
