import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { fonts } from "../App";
import { fontSetter, fontType } from "../types/fonts";
import downArrow from "../assets/icon-arrow-down.svg";

const FontDropDown = ({
  selectedFont,
  setSelectedFont,
}: {
  selectedFont: fontType;
  setSelectedFont: fontSetter;
}) => {
  return (
    <Listbox value={selectedFont} onChange={setSelectedFont}>
      <Listbox.Button className="relative flex flex-row items-center gap-4">
        <span className="text-base font-bold">{selectedFont.name}</span>
        <img src={downArrow} alt="Down Arrow" />
        <Listbox.Options className="absolute shadow-white top-9 rounded-2xl right-0 w-48 h-36 flex flex-col items-center justify-center">
          {fonts.map((font) => (
            <Listbox.Option
              className={classNames(
                "hover:text-purple-primary font-bold",
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
