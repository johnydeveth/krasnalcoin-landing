import { Box, Stack, StackProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import Poland from "../assets/poland.png";
import Usa from "../assets/usa.png";

const ITEMS = [
  { icon: Poland, value: "pl" },
  { icon: Usa, value: "en" },
];

export default function LanguageSelector(props: StackProps) {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <Stack
      direction="row"
      spacing={1}
      pb={2}
      sx={{
        position: "absolute",
        right: { xs: 8, md: 16 },
        top: { xs: 4, md: 16 },
      }}
      {...props}
    >
      {ITEMS.map((item) => (
        <Box
          component="img"
          src={item.icon}
          height={{ xs: 28, md: 32 }}
          sx={{
            cursor: "pointer",
            opacity: i18n.language === item.value ? 0.9 : 0.6,
            transition: "opacity 0.3s ease-in-out",
            ":hover": { opacity: 0.9 },
          }}
          onClick={() => i18n.changeLanguage(item.value)}
        />
      ))}
    </Stack>
  );
}
