"use client";

import { forwardRef } from "react";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  button?: string;
  disabled?: boolean;
  className?: string;
}

const Buttons = forwardRef<HTMLButtonElement, Props>(
  ({ children, button, onClick, disabled, className }: Props, ref) => {
    let buttonStyle;

    if (button) {
      buttonStyle = `button ${button}`;
    } else {
      buttonStyle = `button`;
    }

    return (
      <button
        className={`${buttonStyle} ${className}`}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Buttons;
