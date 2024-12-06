// src/components/Button.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleTheme } from "../../redux/themeSlice";

const Button: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      style={{
        backgroundColor: theme === "light" ? "#007bff" : "#444444",
        color: "#ffffff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default Button;
