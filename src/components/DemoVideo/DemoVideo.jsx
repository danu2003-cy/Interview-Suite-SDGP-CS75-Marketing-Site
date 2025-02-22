import React from 'react';
import './DemoVideo.css';
import video from '../../assets/DemoVideo/demo-video.mp4';

const DemoVideo = () => {
  return (
    <section className="demo-video-section text-center py-5">
      <div className="container" id='how-it-works'>
        {/* <h2 className="section-title mb-3">Watch Our Demo</h2> */}
        <h2 className="section-description mb-4">
          Get a glimpse of how Interview Suite can enhance your interview preparation.
        </h2>
        <div className="video-container">
          <video className="demo-video" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
