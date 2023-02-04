import styled from "@emotion/styled";
import React from "react";
import { ColorType } from "../../types/color";

export type ButtonStyledProps = {
  bgColor?: ColorType;
};

export const ButtonStyled = styled.button<ButtonStyledProps>(
  {
    "&:hover": { cursor: "pointer" },
  },

  ({ bgColor, theme }) => {
    switch (bgColor) {
      case "base":
        return { background: theme.color.base };
      case "primary":
        return { background: theme.color.primary };
      case "secondary":
        return { background: theme.color.secondary };
      case "accent":
        return { background: theme.color.accent };
      case "typography":
        return { background: theme.color.typography };
      default:
        return { background: bgColor };
    }
  }
);

export type ButtonProps = ButtonStyledProps & {
  children?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <ButtonStyled>{props.children}</ButtonStyled>;
};
