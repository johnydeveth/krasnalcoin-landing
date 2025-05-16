import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import Loading from "./components/Loading";
import useIsSmallDevice from "./hooks/useIsSmallDevice";
import useWaitForAssetsToBeLoaded from "./hooks/useWaitForAssetsToBeLoaded";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Friends from "./pages/Friends";
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
  const { t } = useTranslation();
  const classes = useStyles();
  const isSmallDevice = useIsSmallDevice();

  const assetsLoaded = useWaitForAssetsToBeLoaded();

  return (
    <Box className={classes.container}>
      <title>{t("html.title")}</title>
      <meta name="description" content={t("html.description")} />
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
              <Box
                className={classes.page}
                sx={{
                  background:
                    "radial-gradient(circle at center, #f1f4f1, #98d5d3)",
                }}
              >
                <Friends />
              </Box>
              <Stack
                className={classes.page}
                justifyContent="center"
                sx={{
                  background:
                    "radial-gradient(circle at center, #efe481, #e4a34a)",
                }}
              >
                <Faq />
              </Stack>

              <Box sx={{ scrollSnapAlign: "center" }}>
                <Footer />
              </Box>
            </>
          ) : (
            <>
              <Box className={classes.page}>
                <Tokenomics />
              </Box>
              <Stack
                className={classes.page}
                sx={{
                  background:
                    "radial-gradient(circle at center, #f1f4f1, #98d5d3)",
                }}
                justifyContent="space-evenly"
              >
                <Friends />

                <Faq />
              </Stack>
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
