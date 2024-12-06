import React from "react";
import Button, { ButtonProps } from "./Button";

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="secondary" />;
};

export default SecondaryButton;
