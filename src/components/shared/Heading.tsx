import { Typography } from "@mui/material";

export default function Heading({text}: {text: string}) {
  return (
    <Typography
        variant="h1"
    >
        {text}
    </Typography>
  )
}
