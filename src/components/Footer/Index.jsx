import classes from "./Index.module.css";

function Footer() {
  return (
    <footer>
      <span>
        Designed & coded by
        <a href="mailto:mikos.marcin.m@gmail.com" className={classes.credits}>
          {" "}
          Marcin Mikos
        </a>
      </span>
    </footer>
  );
}

export default Footer;
