import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Landing from "./pages/Landing";
import Tokenomics from "./pages/Tokenomics";

const useStyles = makeStyles({
  container: {
    overflowY: "auto",
    overflow: "auto",
    height: "100%",
    flexFlow: "column nowrap",
    scrollSnapType: "y mandatory",
  },
  page: {
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
    flex: "none",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "stretch",
    alignItems: "stretch",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.page}>
        <Landing />
      </Box>
      <Box className={classes.page}>
        <Tokenomics />
      </Box>
    </Box>
  );
}

export default App;
