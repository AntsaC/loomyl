import { Book, MusicNote, Photo } from "@mui/icons-material";

interface Route {
  path: string;
  label: string;
  icon: any;
}

export const routes: Route[] = [
  {
    path: "diary",
    label: "Diaries",
    icon: <Book />,
  },
  {
    path: "memories",
    label: "Memories",
    icon: <Photo />,
  },
  {
    path: "musics",
    label: "Musics",
    icon: <MusicNote />,
  },
];
