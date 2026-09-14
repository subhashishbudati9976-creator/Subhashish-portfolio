import React from 'react';

interface HeroExperienceTriggerProps {
  onActivate: () => void;
  disabled?: boolean;
}

const HeroExperienceTrigger: React.FC<HeroExperienceTriggerProps> = ({
  onActivate,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className="hero-experience-trigger"
      onClick={onActivate}
      disabled={disabled}
      aria-label="Launch ShadowFox cinematic introduction"
    >
      <span className="hero-experience-trigger-icon" aria-hidden="true">
        ◇
      </span>

      <span className="hero-experience-trigger-text">
        Enter ShadowFox
      </span>

      <span className="hero-experience-trigger-arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
};

export default HeroExperienceTrigger;