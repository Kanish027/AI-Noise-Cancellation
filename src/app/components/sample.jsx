"use client";
import React, { useEffect, useRef, useState } from "react";

const Technology = () => {
  const BikeNoiseInput = "/BikeNoise_input.wav";
  const BikeNoiseOutput = "/BikeNoise_output.wav";
  const BabbleNoiseInput = "/BabbleNoise_input.wav";
  const BabbleNoiseOutput = "/BabbleNoise_output.wav";

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [switchOn, setSwitchOn] = useState(false);
  const [now, setNow] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(BikeNoiseInput);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setCurrentTime(audio.currentTime); // Store current time
      audio.pause();
    } else {
      audio.currentTime = currentTime; // Set current time
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSwitchChange = () => {
    const audio = audioRef.current;

    const currentPlayBackTime = audio.currentTime;

    audio.src = switchOn ? BikeNoiseInput : BikeNoiseOutput;

    audio.onloadedmetadata = () => {
      audio.currentTime = currentPlayBackTime;
      audio.play();
    };
    setSwitchOn(!switchOn);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setNow(progress);
    };

    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
    };
  }, [audioRef]);

  return (
    <section className="my-8 mx-4 md:mx-10">
      {/* ... */}
      <div className="my-4 md:my-8">
        <div className=" text-xl font-bold text-center">
          Try different noise types
        </div>
        <div className="flex flex-wrap items-center justify-center my-4">
          <button
            className="px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:bg-slate-100 focus:text-black rounded-lg text-center m-1"
            onClick={handlePlayBikeAudio}
          >
            Bike voices
          </button>
          <button
            className="px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:bg-slate-100 focus:text-black rounded-lg text-center m-1"
            onClick={handlePlayBabbleAudio}
          >
            Babble Voice
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technology;
