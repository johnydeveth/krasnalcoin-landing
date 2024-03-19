import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Loading from "./components/Loading";
import useIsSmallDevice from "./hooks/useIsSmallDevice";
import useWaitForAssetsToBeLoaded from "./hooks/useWaitForAssetsToBeLoaded";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import MobileTokenomicsOne from "./pages/MobileTokenomicsOne";
import MobileTokenomicsTwo from "./pages/MobileTokenomicsTwo";
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
  const isSmallDevice = useIsSmallDevice();

  const assetsLoaded = useWaitForAssetsToBeLoaded();

  return (
    <Box className={classes.container}>
      {assetsLoaded ? (
        <>
          <Box className={classes.page}>
            <Landing />
          </Box>
          {isSmallDevice ? (
            <>
              <Box className={classes.page}>
                <MobileTokenomicsOne />
              </Box>
              <Box className={classes.page}>
                <MobileTokenomicsTwo />
              </Box>
            </>
          ) : (
            <>
              <Box className={classes.page}>
                <Tokenomics />
              </Box>
              <Box sx={{ scrollSnapAlign: "center" }}>
                <Footer />
              </Box>
            </>
          )}
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
