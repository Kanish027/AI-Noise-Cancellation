import React, { useEffect, useRef, useState } from "react";
import SVGComponent from "./SVGComponent";

const BikePlayer = () => {
  const BikeNoiseInput = "/Wind__4_-19_842_Input.wav";
  const BikeNoiseOutput = "/Wind__4_-19_842_Output.wav";

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [switchOn, setSwitchOn] = useState(false);
  const [now, setNow] = useState(0);
  const [activeAudio, setActiveAudio] = useState("bike");
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setCurrentTime(audio.currentTime);
      audio.pause();
    } else {
      audio.currentTime = currentTime;
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSwitchChange = () => {
    const audio = audioRef.current;

    const currentPlayBackTime = audio.currentTime;

    if (activeAudio === "bike") {
      audio.src = switchOn ? BikeNoiseInput : BikeNoiseOutput;
    }

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
      setProgress(progress);
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
    <div className="bg-gray-200 border border-gray-200 rounded-2xl">
      <div className="bg-gray-100 rounded-2xl">
        <div className="px-5 h-28 flex gap-5 items-center">
          <div className="play-btn" onClick={() => togglePlayPause()}>
            {isPlaying ? (
              <i className="fa-solid fa-circle-pause"></i>
            ) : (
              <div>
                <i className="fa-solid fa-circle-play"></i>
                <div className="ripple"></div>
              </div>
            )}
          </div>
          <audio ref={audioRef} src={BikeNoiseInput} />
          <div className="w-full relative overflow-hidden">
            <div className="">
              <div className="progress">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm.svg"
                  alt=""
                  width={506}
                  height={46}
                />
                <div className="playing_progress" style={{ width: `${now}%` }}>
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm_active.svg"
                    alt=""
                    width={506}
                    height={46}
                    data-src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm_active.svg"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5 gap-5">
        <div className="text-gray-600 font-bold">Without AI Mic</div>
        <div className=" flex items-center">
          <label
            className={
              !isPlaying
                ? "inline-flex items-center"
                : "inline-flex items-center cursor-pointer"
            }
          >
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={switchOn}
              onChange={handleSwitchChange}
              disabled={!isPlaying}
            />
            <div className="relative w-9 h-5 bg-gray-400  peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
          </label>
        </div>
        <div className="text-gray-600 font-bold">With AI Mic</div>
      </div>
    </div>
  );
};

export default BikePlayer;
