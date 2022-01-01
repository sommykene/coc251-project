import ContentContainer from "@components/ContentContainer";
import Sidebar from "@components/SideBar";
import { Box, CssBaseline } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <Sidebar />
      <ContentContainer />
    </Box>
  );
}
