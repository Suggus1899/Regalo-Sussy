import React, { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button onClick={togglePlay} aria-label={playing ? "Pausar música" : "Reproducir música"}>
        {playing ? "⏸️ Pausar" : "▶️ Reproducir"}
      </button>
    </div>
  );
}

export default MusicPlayer;
