import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Button } from "@mui/material";

import profile from "@assets/images/profile.png";
import lessonImg from "@assets/images/lessonImg.svg";
import ActivityTimeline from "@components/ActivityTimeline";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

const FItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function PracticeHome() {
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      {/* main */}
      <Grid container item spacing={2} md={12} lg={9}>
        <Grid item xs={9} sx={{ height: "50%" }}>
          <Item
            sx={{
              bgcolor: "#fff",
              backgroundImage: `url(${lessonImg})`,
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "border-box",
              backgroundSize: "contain",
            }}
          >
            <Box
              sx={{
                textAlign: "right",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <h1>Lesson 2: ABChD</h1>
                <h3>Intro to Abidịị</h3>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#ffd62f", color: "black" }}
                >
                  Start Lesson
                </Button>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item></Item>
        </Grid>
        <Grid item xs={7} sx={{ height: "50%" }}>
          <Item sx={{ bgcolor: "#80b036" }}></Item>
        </Grid>
        <Grid item xs={5}>
          <Item
            sx={{
              bgcolor: "#008751",
              backgroundImage:
                "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/146EB/production/_120519638_chloe_munday_photo.jpg)",
              backgroundPosition: "center",
            }}
          ></Item>
        </Grid>
      </Grid>

      {/* sidebar */}
      <Box
        component={Grid}
        container
        item
        xs
        lg={3}
        display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        sx={{ height: "100%", flexDirection: "column" }}
      >
        <h3 style={{ textAlign: "center" }}>My Activity</h3>
        <Grid xs container>
          <Grid item xs>
            <Item>
              <ActivityTimeline />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
