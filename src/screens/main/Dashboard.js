import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import Home from "@mui/icons-material/Home";
import School from "@mui/icons-material/School";
import Games from "@mui/icons-material/Games";
import Article from "@mui/icons-material/Article";
import Logout from "@mui/icons-material/Logout";

//img
import logo from "@assets/images/logo.svg";
import textLogo from "@assets/images/textlogo.png";
import profile from "@assets/images/profile.png";
import { Avatar } from "@mui/material";
import { Settings } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} size="">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            m: "8px 16px",
            justifyContent: open ? "space-between" : "center",
          }}
        >
          <img src={logo} alt="Asusu Igbo Logo" />
          {open && <img src={textLogo} alt="Asusu Igbo Logo" />}
        </Box>
        {!open ? (
          <Box sx={{ m: "auto", mt: "10px" }}>
            <Avatar src={profile} />
          </Box>
        ) : (
          <>
            <Box sx={{ m: "auto", mt: "10px" }}>
              <img src={profile} alt="profile picture" />
            </Box>
            <Box sx={{ m: "auto", textAlign: "center", my: 3 }}>
              <span>Som</span>
              <br />
              <span sx={{ display: "block" }}>@sommykene</span>
              <br />
              <span sx={{ display: "block" }}>Go to Profile</span>
            </Box>
            <Box
              sx={{
                bgcolor: "#ffd62f",
                p: "10px",
                borderRadius: 3,
                width: "90%",
                m: "auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              1732 XP
            </Box>
          </>
        )}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              bgcolor: "#D9F1EF",
              width: "100%",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button key="Lessons">
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Lessons" />
              </ListItem>
              <ListItem button key="Practice">
                <ListItemIcon>
                  <Games />
                </ListItemIcon>
                <ListItemText primary="Practice" />
              </ListItem>
              <ListItem button key="Resources">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Resources" />
              </ListItem>
            </List>
            <List>
              <ListItem button key="Settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button key="Logout">
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* close */}
        <Button
          size="large"
          sx={{
            display: "flex",
            justifyContent: open ? "flex-start" : "center",
          }}
          onClick={handleDrawerToggle}
        >
          {open ? (
            <ChevronLeftIcon sx={{ color: "black" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "black" }} />
          )}
        </Button>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#E9EDF0",
          height: "100%",
        }}
      >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
