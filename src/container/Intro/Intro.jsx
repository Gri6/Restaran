import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRaf = useRef();
  const heandelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRaf.current.pause();
    } else vidRaf.current.play();

    // setPlayVideo(true);
    // setPlayVideo(false);
  };

  return (
    <div className="app__video">
      <video ref={vidRaf} src={meal} type="video" loop controls={false} muted />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={heandelVideo}
        >
          {playVideo ? (
            <BsFillPlayFill color="#fff" fontSize={30} />
          ) : (
            <BsPauseFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
