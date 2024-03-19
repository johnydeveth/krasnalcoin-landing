import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Loading from "./components/Loading";
import useWaitForAssetsToBeLoaded from "./hooks/useWaitForAssetsToBeLoaded";
import Footer from "./pages/Footer";
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

  const assetsLoaded = useWaitForAssetsToBeLoaded();

  return (
    <Box className={classes.container}>
      {assetsLoaded ? (
        <>
          <Box className={classes.page}>
            <Landing />
          </Box>
          <Box className={classes.page}>
            <Tokenomics />
          </Box>
          <Box sx={{ scrollSnapAlign: "center" }}>
            <Footer />
          </Box>
        </>
      ) : (
        <Box className={classes.page}>
          <Loading />
        </Box>
      )}
    </Box>
  );
}

export default App;
