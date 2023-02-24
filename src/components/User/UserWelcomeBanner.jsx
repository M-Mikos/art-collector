import { useState } from "react";
import classes from "./UserWelcomeBanner.module.css";

function UserWelcomeBanner(props) {
  return (
    <div className={classes.banner}>
      <h1>Hello!</h1>
    </div>
  );
}
export default UserWelcomeBanner;
