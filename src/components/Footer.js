import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        color="red"
        label="Facebook"
        value="recents"
        icon={<FacebookIcon style={{ fill: "#4360A6" }} />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="favorites"
        icon={<TwitterIcon style={{ fill: "#4360A6" }} />}
      />
      <BottomNavigationAction
        label="Instagram"
        value="nearby"
        icon={<InstagramIcon style={{ fill: "#4360A6" }} />}
      />
      <BottomNavigationAction
        label="YouTube"
        value="folder"
        icon={<YouTubeIcon style={{ fill: "#4360A6" }} />}
      />
    </BottomNavigation>
  );
}

export default Footer;
