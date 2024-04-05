import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";

export default function VisibleAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    }
  }, [isVisible]);

  return (
    <>
      <Box
        ref={ref}
        sx={{
          animationName: visible ? "SlideUp" : undefined,
          animationDuration: "0.6s",
          opacity: visible ? 1 : 0,
        }}
      >
        {children}
      </Box>
    </>
  );
}
