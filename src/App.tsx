import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Landing from "./pages/Landing";
import Tokenomics from "./pages/Tokenomics";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
  },
  page: {
    height: "100vh",
    scrollSnapAlign: "start",
    border: "1px solid #ccc",
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
