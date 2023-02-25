import classNames from "classnames";
import { useContext } from "react";
import iconMoon from "../assets/icon-moon.svg";
import { ThemeContext } from "../providers/ThemeContext";

const themeStyles = {
  switchThemeButton: {
    background: { light: "bg-gray-dark", dark: "bg-purple-medium-deep" },
    position: { light: "justify-start", dark: "justify-end" },
  },
};

const ToggleThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    toggleTheme();
  };
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col justify-center">
        <button
          className={classNames(
            "flex w-10 rounded-xl py-1 px-1 hover:bg-purple-medium-deep",
            themeStyles.switchThemeButton.position[theme.currentTheme],
            themeStyles.switchThemeButton.background[theme.currentTheme]
          )}
          onClick={() => handleThemeChange()}
        >
          <div className="h-4 w-4 rounded-3xl bg-white"></div>
        </button>
      </div>
      <img src={iconMoon} className="w-5" alt="" />
    </div>
  );
};

export default ToggleThemeSwitch;
