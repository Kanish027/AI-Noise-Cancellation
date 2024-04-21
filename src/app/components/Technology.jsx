"use client";
import { useState } from "react";
import BabblePlayer from "./BabblePlayer";
import BikePlayer from "./BikePlayer";
import ClickPlayer from "./ClickPlayer";
import SirenPlayer from "./SirenPlayer";
import BabyPlayer from "./BabyPlayer";

const Technology = () => {
  const [activeAudio, setActiveAudio] = useState("bike");

  const handlePlayBikeAudio = () => {
    setActiveAudio("bike");
  };

  const handlePlayBabbleAudio = () => {
    setActiveAudio("babble");
  };

  const handlePlaySirenAudio = () => {
    setActiveAudio("siren");
  };

  const handlePlayBabyAudio = () => {
    setActiveAudio("baby");
  };

  const handlePlayClickAudio = () => {
    setActiveAudio("click");
  };

  return (
    <section className="my-8 mx-4 md:mx-10">
      <h2 className="text-2xl md:text-3xl text-center font-bold">Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4">
        <div className="">
          <div className="subtitle mb-4 md:mb-8">AI Noise Cancellation</div>
          <div className="description">
            <div className="text-body">
              Ensure maximum clarity by eliminating background noises, voices
              and echo from both inbound and outbound meetings and calls.
            </div>
            <ul className="mt-4 md:mt-8">
              <li className="text-body my-2">
                <i className="fa-regular text-blue-500 size-5 fa-circle-check"></i>{" "}
                Works with any conferencing app{" "}
              </li>
              <li className="text-body my-2">
                <i className="fa-regular text-blue-500 size-5 fa-circle-check"></i>{" "}
                Works with all call center platforms{" "}
              </li>
              <li className="text-body my-2">
                <i className="fa-regular text-blue-500 size-5 fa-circle-check"></i>{" "}
                Works with any headphone and device{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid ms-0 md:ms-8 grid-cols-1 md:grid-cols-5">
            <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-6">
              <div className="text-xl font-bold text-center mb-4 md:mb-8">
                Hear the demo:
              </div>
              {/* <div className="bg-gray-200 border border-gray-200 rounded-2xl">
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
                    <div className="w-full">
                      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                          {`${Math.floor(isNaN(now) ? 0 : now)}%`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-5 gap-5">
                  <div className="text-gray-600 font-bold">Without AI Mic</div>
                  <div className=" flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={switchOn}
                        onChange={handleSwitchChange}
                      />
                      <div className="relative w-9 h-5 bg-gray-400  peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <div className="text-gray-600 font-bold">With AI Mic</div>
                </div>
              </div> */}
              {activeAudio === "bike" && <BikePlayer />}
              {activeAudio === "babble" && <BabblePlayer />}
              {activeAudio === "click" && <ClickPlayer />}
              {activeAudio === "siren" && <SirenPlayer />}
              {activeAudio === "baby" && <BabyPlayer />}

              <div className="my-4 md:my-8">
                <div className=" text-xl font-bold text-center">
                  Try different noise types
                </div>
                <div className="flex flex-wrap items-center justify-center my-4">
                  <button
                    className={
                      activeAudio === "bike"
                        ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                        : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                    }
                    onClick={handlePlayBikeAudio}
                  >
                    Wind Voice
                  </button>
                  <button
                    className={
                      activeAudio === "babble"
                        ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                        : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                    }
                    onClick={handlePlayBabbleAudio}
                  >
                    Babble Voice
                  </button>
                  <button
                    className={
                      activeAudio === "click"
                        ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                        : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                    }
                    onClick={handlePlayClickAudio}
                  >
                    Click Voice
                  </button>
                  <button
                    className={
                      activeAudio === "baby"
                        ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                        : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                    }
                    onClick={handlePlayBabyAudio}
                  >
                    Baby Voice
                  </button>
                  <button
                    className={
                      activeAudio === "siren"
                        ? "px-2.5 py-3.5 text-sm font-medium text-white bg-blue-500 rounded-lg text-center m-1"
                        : "px-2.5 py-3.5 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg text-center m-1"
                    }
                    onClick={handlePlaySirenAudio}
                  >
                    Siren Voice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
