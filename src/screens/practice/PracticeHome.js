import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { DataStore } from "aws-amplify";

import { Lesson } from "../../models";
import { useState } from "react";

export default function PracticeHome() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const getLessons = async () => {
      const lessonData = await DataStore.query(Lesson);
      setLessons(lessonData);
    };

    getLessons();
  }, []);

  return (
    <Box>
      <h1>hello</h1>
      {lessons.map((i) => (
        <Box>
          <span>{i.name}</span>
          <br />
          <span>{i.subtitle}</span>
        </Box>
      ))}
    </Box>
  );
}
