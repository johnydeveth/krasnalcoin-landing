import { Box, Stack, StackProps } from "@mui/material";
import Logo from "../assets/logo.png";
import CustomDivider from "../components/CustomDivider";
import LinkList from "../components/LinkList";
import { participateItems, resourcesItems } from "../utils/constants";
import { mdHorizontalPadding, xlHorizontalPadding } from "../utils/theme";

export default function Footer(props: StackProps) {
  return (
    <Stack direction="column" height={210} sx={{ backgroundColor: "#331a00" }}>
      <CustomDivider />
      <Box position="relative" flex={1}>
        <Box
          component="img"
          src={Logo}
          position="absolute"
          top={{ xs: "16px", md: "54px" }}
          left={{ xs: "23px", md: "224px" }}
          sx={{
            width: 64,
          }}
        />
        <Stack
          direction="row"
          spacing={{ xs: 5, md: 16 }}
          position="absolute"
          sx={{
            right: {
              xs: "16px",
              md: mdHorizontalPadding,
              xl: xlHorizontalPadding,
            },
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        >
          <LinkList title="Resources" items={resourcesItems} />
          <LinkList title="Participate" items={participateItems} />
        </Stack>
      </Box>
      <CustomDivider />
    </Stack>
  );
}
