import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  muted: boolean;
  isPlaying: boolean;
}

export function VideoPlayer({src, poster, muted, isPlaying}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.load();
    }
  }, [isPlaying]);
  return (
    <video
      width="280"
      height="175"
      ref={videoRef}
      src={src}
      poster={poster}
      muted={muted}
    />
  );
}
