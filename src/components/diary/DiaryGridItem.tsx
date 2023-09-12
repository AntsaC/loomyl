import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Diary from "../../models/Diary";
import "./DiaryGridItem.css";
import { grey } from "@mui/material/colors";
import { DateUtils } from "../../utils/DateUtils";
import { useNavigate } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import { DiaryService } from "../../services/DiaryService";
import { useMutation } from "@tanstack/react-query";

interface Prop {
  diary: Diary;
}

export default function DiaryGridItem({ diary }: Prop) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: DiaryService.deletes,
  });

  function handleOnDelete(): void {
    mutation.mutate(diary.id!);
  }

  return (
    <div className="grid-item" onClick={() => navigate(diary.id!.toString())}>
      <Typography variant="h6" fontSize={14} color={grey[100]}>
        {DateUtils.parse(diary.createdAt)}
      </Typography>
      <Typography marginTop={1} variant="h5">
        {diary.title}
      </Typography>
      <Stack marginTop={1} direction={"row"} justifyContent={"flex-end"}>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate("/edit/" + diary.id!);
          }}
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <Delete fontSize="small" />
        </IconButton>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure to delete this diary ?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Disagree</Button>
            <Button color="error" onClick={handleOnDelete} autoFocus>
              {mutation.isLoading ? <CircularProgress /> : "Delete it"}
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </div>
  );
}
