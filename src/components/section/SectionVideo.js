import React, { useState } from 'react';
import Image from 'next/image';

const SectionVideo = () => {
    const [videoKey, setVideoKey] = useState(0);

    const handlePlay = () => {
        setVideoKey(prevKey => prevKey + 1);
    };

    const handleReset = () => {
        setVideoKey(0);
    };

    return (
        <section className='section-video picture' id="videoContainer">
            {videoKey === 0 ? (
                <>
                    <Image id="thumbnail" src="/images/video-img.png" alt="Video Thumbnail" width={2880} height={1322} />
                    <div className='icon-play' id="playButton" onClick={handlePlay}></div>
                </>
            ) : (
                <>
                    <iframe
                        key={videoKey}
                        id="youtubeVideo"
                        src="https://www.youtube.com/embed/iImzX2zQAWY?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                        allowFullScreen
                        width="100%"
                        height="100%"
                    ></iframe>
                    <div className='position-absolute top-0 left-0 w-100 h-100' onClick={handleReset}></div>
                </>
            )}
        </section>
    );
};

export default SectionVideo;
