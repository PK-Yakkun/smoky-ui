import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <button style={{ background: "red" }}>{props.children}</button>;
};
