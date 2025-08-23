import { colors } from "../../../data/colors";

export const heading2 = {
  fontFamily: "Playfair Display, serif",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "160%",
  color: colors.black[100],
  letterSpacing: "-0.6px",
};

export const inputStyles = {
  variant: "flushed",
  focusBorderColor: "#958DA5",
  w: "100%",
};

export const formButtonStyles = {
  bg: colors.neutral[10],
  border: `1px solid ${colors.primary[50]}`,
  padding: "24px 10px",
  fontWeight: "400",
  fontSize: "16px",
  iconSpacing: "10px",
};

export const createButtonStyles = {
  color: colors.neutral[10],
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "160%",
  letterSpacing: "-0.6px",
  w: "226px",
  bg: colors.primary[50],
  mt: "48px",
  padding: "24px",
  borderRadius: "10px",
};

export const flyoutActionsStyles = {
  color: colors.neutral[10],
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "160%",
  letterSpacing: "-0.6px",
  alignItems: "center",
  gap: "10px",
};
