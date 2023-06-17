import { FC } from "react";
import "../../styles/Button.scss";

interface buttonProps {
  children: string;
  action: () => void;
  buttonStyle: string;
  buttonSize: string;
  width: string;
}

const STYLES = ["btn--primary", "btn--solid", "btn--outline", "btn--ghost"];
const SIZES = ["btn--medium", "btn--large"];

export const Button: FC<buttonProps> = ({
  children,
  action,
  buttonStyle,
  buttonSize,
  width,
}: buttonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={action}
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
};
