import React, { useEffect, useRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  magnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  magnetic = false,
  onPointerMove,
  onPointerLeave,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!magnetic) return;

    const button = buttonRef.current;
    if (!button) return;

    const mediaQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    if (!mediaQuery.matches) return;

    const handleMove = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();

      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      const strength = 0.12;

      button.style.setProperty(
        '--magnetic-x',
        `${x * strength}px`
      );

      button.style.setProperty(
        '--magnetic-y',
        `${y * strength}px`
      );
    };

    const handleLeave = () => {
      button.style.setProperty('--magnetic-x', '0px');
      button.style.setProperty('--magnetic-y', '0px');
    };

    button.addEventListener('pointermove', handleMove);
    button.addEventListener('pointerleave', handleLeave);

    return () => {
      button.removeEventListener('pointermove', handleMove);
      button.removeEventListener('pointerleave', handleLeave);
    };
  }, [magnetic]);

  const sizeClass =
    size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  const variantClass =
    variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'accent'
      ? 'btn-accent'
      : variant === 'ghost'
      ? 'btn-ghost'
      : 'btn-primary';

  return (
    <button
      ref={buttonRef}
      className={`btn ${variantClass} ${sizeClass} ${
        magnetic ? 'btn-magnetic' : ''
      } ${className}`.trim()}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...props}
    >
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </span>
      )}

      <span>{children}</span>
    </button>
  );
};