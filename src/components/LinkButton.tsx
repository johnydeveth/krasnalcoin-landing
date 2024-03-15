import { Link, Typography, TypographyProps } from "@mui/material";

import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "40px",
    backgroundColor: "white",
    border: "1px solid black",
    height: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    filter: "drop-shadow(0px 3px rgb(109, 105, 26))",
    textDecoration: "none !important",
    color: "black !important",
    fontSize: "20px !important",
    "&:hover": {
      filter: "drop-shadow(0px -3px rgb(109, 105, 26))",
    },
  },
});

export default function LinkButton({
  className,
  href,
  ...otherProps
}: { href: string } & TypographyProps) {
  const classes = useStyles();

  return (
    <Typography
      component={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(classes.root, className)}
      {...otherProps}
    >
      {otherProps.children}
    </Typography>
  );
}
