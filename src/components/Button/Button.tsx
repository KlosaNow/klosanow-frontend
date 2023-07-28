import { FC } from "react";
import "../../styles/Button.scss";
import { buttonInterface } from "../../types/components/componetInterface";

const STYLES = ["btn--primary", "btn--solid", "btn--outline", "btn--ghost","btn--desktop"];
const SIZES = ["btn--medium", "btn--large","btn--small"];

export const Button: FC<buttonInterface> = ({
  children,
  action,
  buttonStyle,
  buttonSize,
  width,
}: buttonInterface) => {
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
