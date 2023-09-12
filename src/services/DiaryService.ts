import Diary from "../models/Diary";
import api from "./api";

const all = (): Promise<Diary[]> =>
  api.get("diaries").then((resp) => resp.data);

const one = (id: number | string): Promise<Diary> =>
  api.get(`diaries/${id}`).then((resp) => resp.data);

const allQuery = () => ({
  queryKey: ["diaries"],
  queryFn: all,
});

const oneQuery = (id: number | string) => ({
  queryKey: ["diaries", id],
  queryFn: () => one(id),
});

const save = (diary: any) =>
  diary.id ? api.put(`diaries/${diary.id}`, diary) : api.post("diaries", diary);

export const DiaryService = {
  allQuery,
  oneQuery,
  save,
};
