import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLinks from "../shared/components/MenuItemLinks";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(135deg, #182a73 0%, #218aae 69%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              component={NavLink}
              to={"/"}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, gap: 2 }}
            >
              <Group fontSize="large" />
              <Typography variant="h6" component="div">
                Meet Up
              </Typography>
            </IconButton>
            <Box sx={{ display: "flex" }}>
              <MenuItemLinks to="/activities">Activities</MenuItemLinks>
              <MenuItemLinks to={"/createActivity"}>
                Create Activity
              </MenuItemLinks>
            </Box>
            <Button onClick={() => {}} size="large" variant="contained">
              User Menu
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
