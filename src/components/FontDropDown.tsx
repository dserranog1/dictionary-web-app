import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { fonts } from "../App";
import { fontSetter, fontType } from "../types/fonts";
import downArrow from "../assets/icon-arrow-down.svg";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";

const themeStyles = {
  dropdown: {
    background: { light: "bg-white", dark: "bg-gray-deep-dark" },
    shadow: { light: "shadow-white-main", dark: "shadow-black-main" },
  },
};

const FontDropDown = ({
  selectedFont,
  setSelectedFont,
}: {
  selectedFont: fontType;
  setSelectedFont: fontSetter;
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Listbox value={selectedFont} onChange={setSelectedFont}>
      <Listbox.Button className="relative flex flex-row items-center gap-4">
        <span className={classNames("text-base font-bold")}>
          {selectedFont.name}
        </span>
        <img src={downArrow} alt="Down Arrow" />
        <Listbox.Options
          className={classNames(
            "absolute top-9 rounded-2xl right-0 w-48 h-36 flex flex-col items-center justify-center z-10",
            themeStyles.dropdown.background[theme.currentTheme],
            themeStyles.dropdown.shadow[theme.currentTheme]
          )}
        >
          {fonts.map((font) => (
            <Listbox.Option
              className={classNames(
                "hover:text-purple-medium-deep font-bold",
                font.value
              )}
              key={font.id}
              value={font}
            >
              {font.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox.Button>
    </Listbox>
  );
};

export default FontDropDown;
