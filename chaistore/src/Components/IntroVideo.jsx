import React from 'react'
import video from "../assets/mbachaiwala.mp4";
import "./intro.scss";

const IntroVideo = () => {
  return (
    <div className='intro'>
        <video src={video}  muted autoPlay loop controlsList='nodownload'></video>
        <div></div>
    </div>
  )
}

export default IntroVideo