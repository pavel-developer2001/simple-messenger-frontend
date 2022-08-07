import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuList from "../MenuList";
import UserData from "../UserData";
import DehazeIcon from "@mui/icons-material/Dehaze";
import styles from "./Menu.module.scss";

type Anchor = "top" | "left" | "bottom" | "right";

const Menu = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <UserData />
      <MenuList />
    </Box>
  );

  return (
    <nav>
      <React.Fragment>
        <div className={styles.btn}>
          <Button onClick={toggleDrawer("left", true)}>
            <DehazeIcon />
          </Button>
        </div>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </nav>
  );
};
export default Menu;
