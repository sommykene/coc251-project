import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CultureHome from "@screens/main/CultureHome";
import LearnHome from "@screens/main/LearnHome";
import PracticeHome from "@screens/main/PracticeHome";
import Home from "@screens/main/Home";
import VocabHome from "@screens/main/VocabHome";
import Dictionary from "@screens/main/Dictionary";

export default function ContentContainer() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: "#E9EDF0",
        // height: "100vh",
      }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="learn" element={<LearnHome />} />
        <Route path="practice" element={<PracticeHome />} />
        <Route path="vocabulary" element={<VocabHome />} />
        <Route path="culture" element={<CultureHome />} />
      </Routes>
    </Box>
  );
}
