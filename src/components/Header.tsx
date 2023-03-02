import React from "react";
import logo from "../assets/logo.svg";
import { fontSetter, fontType } from "../types/fonts";
import FontDropDown from "./FontDropDown";
import ToggleThemeSwitch from "./ToggleThemeSwitch";

const Header = ({
  selectedFont,
  setSelectedFont,
}: {
  selectedFont: fontType;
  setSelectedFont: fontSetter;
}) => {
  return (
    <header className="w-full">
      <div className="flex flex-row justify-between">
        <img src={logo} alt="Dictionary logo" className="w-8" />
        <div className="flex flex-row gap-6">
          <FontDropDown
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
          />
          <div className="h-9 w-[1px] bg-white-smoke"></div>
          <ToggleThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
