import React from "react";
import Button, { ButtonProps } from "./Button";

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="primary" />;
};

export default PrimaryButton;
