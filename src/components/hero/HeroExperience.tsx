import React, { useEffect, useRef, useState } from 'react';

type ExperienceState =
  | 'idle'
  | 'loading'
  | 'playing'
  | 'complete'
  | 'error';

interface HeroExperienceProps {
  isActive: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

const VIDEO_SRC = '/media/cinematic/shadowfox-dragon-cinematic.mp4';

const HeroExperience: React.FC<HeroExperienceProps> = ({
  isActive,
  onComplete,
  onSkip,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [state, setState] = useState<ExperienceState>('idle');

  useEffect(() => {
    if (!isActive) {
      setState('idle');

      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }

      return;
    }

    const video = videoRef.current;
    if (!video) return;

    setState('loading');

    video.currentTime = 0;

    const playVideo = async () => {
      try {
        await video.play();
        setState('playing');
      } catch {
        setState('error');
      }
    };

    playVideo();
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onSkip]);

  const handleEnded = () => {
    setState('complete');
    onComplete();
  };

  const handleError = () => {
    setState('error');
  };

  if (!isActive) {
    return null;
  }

  return (
    <div
      className="hero-experience"
      role="dialog"
      aria-modal="true"
      aria-label="ShadowFox cinematic introduction"
    >
      <video
        ref={videoRef}
        className="hero-experience-video"
        src={VIDEO_SRC}
        playsInline
        preload="none"
        onEnded={handleEnded}
        onError={handleError}
      />

      <div className="hero-experience-overlay">
        {state === 'loading' && (
          <div className="hero-experience-status">
            Initializing…
          </div>
        )}

        {state === 'error' && (
          <div className="hero-experience-error">
            <span>Unable to load cinematic.</span>

            <button
              type="button"
              onClick={onSkip}
              className="hero-experience-action"
            >
              Continue
            </button>
          </div>
        )}

        {state === 'playing' && (
          <button
            type="button"
            className="hero-experience-skip"
            onClick={onSkip}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroExperience;