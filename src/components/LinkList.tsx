import { Link, Stack, StackProps, Typography } from "@mui/material";

const mobileTitleSx = {
  background: "linear-gradient(268.12deg, #27B167 8.61%, #5BC8D6 90.32%)",
  backgroundClip: "text",
  textFillColor: "transparent",
};

export default function LinkList({
  title,
  items,
  isMobileVersion,
  ...other
}: {
  title: string;
  items: { title: string; to: string }[];
  isMobileVersion?: boolean;
} & StackProps) {
  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems={isMobileVersion ? "center" : "end"}
      {...other}
    >
      <Typography
        fontWeight={700}
        fontSize={18}
        color="white"
        sx={isMobileVersion ? mobileTitleSx : undefined}
      >
        {title}
      </Typography>
      {items.map((i) => (
        <Link
          key={i.title}
          href={i.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography
            fontWeight={400}
            fontSize={16}
            color={isMobileVersion ? "white" : "#999999"}
            sx={{
              ":hover": {
                textDecorationLine: "underline",
              },
            }}
          >
            {i.title}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
}
