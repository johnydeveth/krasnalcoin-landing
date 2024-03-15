import { Box, BoxProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  scroll: {
    width: "36px",
    height: "36px",
    border: "2px solid #333",
    borderRadius: "50%",
    position: "relative",
    animation: "down 1.5s infinite",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "8px",
      left: "11px",
      width: "12px",
      height: "12px",
      borderLeft: "2px solid #333",
      borderBottom: "2px solid #333",
      transform: "rotate(-45deg)",
    },
  },
  "@keyframes down": {
    "0%": {
      transform: "translate(0)",
    },
    "20%": {
      transform: "translateY(15px)",
    },
    "40%": {
      transform: "translate(0)",
    },
  },
});

export default function Scroll({ className, ...otherProps }: BoxProps) {
  const classes = useStyles();
  return <Box className={clsx(classes.scroll, className)} {...otherProps} />;
}
