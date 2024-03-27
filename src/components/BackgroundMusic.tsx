import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Box, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BackgroundMusicSrc from "../assets/background.mp3";
import "./BackgroundMusic.css";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {isPlaying && (
        <Box
          sx={{
            position: "absolute",
            left: { xs: 22, md: 32 },
            top: { xs: 18, md: 32 },
            // height: { xs: 28, md: 32 },
            // width: { xs: 28, md: 32 },
            overflow: "show",
          }}
        >
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle mediun shade4"></div>
          <div className="circle small shade5"></div>
        </Box>
      )}
      <IconButton
        sx={{
          position: "absolute",
          left: { xs: 8, md: 16 },
          top: { xs: 4, md: 16 },
          background:
            "linear-gradient(268.12deg, #27B167 8.61%, #5BC8D6 90.32%)",
          borderRadius: "50%",
          border: "3px solid black",
          height: { xs: 28, md: 32 },
          width: { xs: 28, md: 32 },
        }}
        onClick={() => setIsPlaying((p) => !p)}
      >
        {isPlaying ? (
          <MusicOffIcon
            sx={{
              color: "white",
              fontSize: 20,
            }}
          />
        ) : (
          <MusicNoteIcon
            sx={{
              color: "white",
              fontSize: 20,
              animation: "shake 2.5s",
              animationIterationCount: "infinite",
            }}
          />
        )}
      </IconButton>

      <audio src={BackgroundMusicSrc} loop ref={audioRef} />
    </>
  );
}
