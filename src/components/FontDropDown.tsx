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
        <span className={classNames("text-sm font-bold md:text-base")}>
          {selectedFont.name}
        </span>
        <img className="w-3" src={downArrow} alt="Down Arrow" />
        <Listbox.Options
          className={classNames(
            "absolute top-9 right-0 z-10 flex h-36 w-48 flex-col items-center justify-center rounded-2xl",
            themeStyles.dropdown.background[theme.currentTheme],
            themeStyles.dropdown.shadow[theme.currentTheme]
          )}
        >
          {fonts.map((font) => (
            <Listbox.Option
              className={classNames(
                "font-bold hover:text-purple-medium-deep",
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
