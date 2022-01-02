import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import lessonImg from "@assets/images/lessonImg.svg";
import { Button } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOpen from "@mui/icons-material/LockOpen";
import Lock from "@mui/icons-material/Lock";
import DoneAll from "@mui/icons-material/DoneAll";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "150px",
}));

export default function LessonsHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={8}>
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
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Box sx={{ flexGrow: 1, mx: 5 }}>
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
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      {/* Extras */}
      <Typography>All Lessons</Typography>

      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Lesson 1: Wohin fahren wir? part 1</Typography>
              <DoneAll sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box
                sx={{
                  bgcolor: "orange",
                  mr: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                View Vocab
              </Box>
              <Box
                sx={{
                  bgcolor: "pink",
                  ml: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                Review Lesson Again
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Lesson 2: Wohin fahren wir? part 1</Typography>
              <LockOpen sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box
              sx={{
                bgcolor: "#ffd62f",
                mt: 2,
                p: 1,
                flex: 1,
                borderRadius: 1,
                textAlign: "center",
              }}
            >
              Start Lesson
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: "#e0e0e0" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Lesson 3: Wohin fahren wir? part 1</Typography>
              <Lock sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "#e0e0e0" }}>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: "#e0e0e0" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Lesson 4: Wohin fahren wir? part 1</Typography>
              <Lock sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "#e0e0e0" }}>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
