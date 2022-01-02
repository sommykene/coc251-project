import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faQuoteLeft,
  faSpellCheck,
} from "@fortawesome/free-solid-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  "&:hover": { color: "pink", cursor: "pointer" },
}));

const FaIcon = styled(FontAwesomeIcon)({
  fontSize: "5em",
});
export default function VocabHome() {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ width: "100%", height: "50%" }}
    >
      <Item>
        <FaIcon icon={faBook} />
        <h1>All Lesson Vocab</h1>
      </Item>
      <Item>
        <FaIcon icon={faSpellCheck} />
        <h1>Dictionary</h1>
      </Item>
      <Item>
        <FaIcon icon={faQuoteLeft} />
        <h1>Phrasebooks</h1>
      </Item>
    </Stack>
  );
}
