import { Box, Stack, StackProps, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import Logo from "../assets/grouped_dwarfs_2.webp";
import LinkButton from "./LinkButton";

export default function Description(props: StackProps) {
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      maxWidth="332px"
      {...props}
    >
      <Box component="img" src={Logo} width={200} />
      <Typography
        fontWeight={400}
        fontSize={32}
        whiteSpace="nowrap"
        overflow="clip"
      >
        {t("description.title")}
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={18}
        lineHeight={{
          xs: "18px",
          md: "22px",
        }}
        textAlign="justify"
        paddingBottom={2}
      >
        <Trans i18nKey="description.text" />
      </Typography>
      <LinkButton href="https://krasnalcoin-public.s3.eu-central-1.amazonaws.com/KC+Toilet+Paper.pdf">
        {t("description.button")}&nbsp;<Box fontWeight="bold">LitePaper</Box>
      </LinkButton>
    </Stack>
  );
}
