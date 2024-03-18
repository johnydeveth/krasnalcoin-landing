import { Box, Stack, StackProps, Typography } from "@mui/material";
import Logo from "../assets/grouped_dwarfs_2.png";
import LinkButton from "./LinkButton";

export default function Description(props: StackProps) {
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
        Resilience
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={{
          xs: 15,
          md: 18,
        }}
        lineHeight={{
          xs: "18px",
          md: "22px",
        }}
        textAlign="justify"
        paddingBottom={2}
      >
        Amidst the surrounding fears about the future, <br />
        <br />
        inspired by the worst financial advice from self-proclaimed experts,{" "}
        <br />
        <br />
        in contrast to the general public opinion, <br />
        <br />a bastard child of low interest rates and an orphan of money
        printing has emerged...
      </Typography>
      <LinkButton href="https://krasnalcoin.pl/wp-content/uploads/2024/02/Litepaper-Krasnalcoina.pdf">
        Read&nbsp;<Box fontWeight="bold">LitePaper</Box>
      </LinkButton>
    </Stack>
  );
}
