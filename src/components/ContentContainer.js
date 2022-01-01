import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CultureHome from "@screens/main/CultureHome";
import LessonHome from "@screens/main/LessonsHome";
import PracticeHome from "@screens/main/PracticeHome";
import ResourcesHome from "@screens/main/ResourcesHome";

export default function ContentContainer() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: "#E9EDF0",
        height: "100%",
      }}
    >
      <Routes>
        <Route path="/lessons" element={<LessonHome />} />
        <Route path="/practice" element={<PracticeHome />} />
        <Route path="/culture" element={<CultureHome />} />
        <Route path="/resources" element={<ResourcesHome />} />
      </Routes>
    </Box>
  );
}