import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink, Link } from "react-router-dom";

import Home from "../Home";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Home", "Profile", "Friends"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {(() => {
                switch (text) {
                  case "Home":
                    return <HomeIcon />;
                  case "Friends":
                    return (
                      <NavLink tag={Link} to="/counter">
                        {" "}
                        <EmojiPeopleIcon />{" "}
                      </NavLink>
                    );
                  case "Profile":

                    return (
                      <NavLink tag={Link} to="/profile">
                        <AccountCircleIcon />{" "}
                      </NavLink>
                    );
                  default:
                    return <MailIcon />;
                }
              })()}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About Us", "Contact Us"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text == "Contact Us" ? (
                <NavLink tag={Link} to="/contactus">
                  {" "}
                  <ContactSupportIcon />{" "}
                </NavLink>
              ) : (
                <InfoIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        {<MenuIcon style={{ color: "white" }} />}
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
