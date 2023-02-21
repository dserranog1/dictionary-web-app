import React from "react";
import logo from "../assets/logo.svg";
import { fontSetter, fontType } from "../types/fonts";
import FontDropDown from "./FontDropDown";

const Header = ({
  selectedFont,
  setSelectedFont,
}: {
  selectedFont: fontType;
  setSelectedFont: fontSetter;
}) => {
  return (
    <header className="mt-14 w-full">
      <div className="flex flex-row gap-6 justify-between">
        <img src={logo} alt="Dictionary logo" className="w-8" />
        <FontDropDown
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
      </div>
    </header>
  );
};

export default Header;
