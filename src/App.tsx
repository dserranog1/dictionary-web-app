import classNames from "classnames";
import { useContext, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WordDisplay from "./components/WordDisplay";
import { ThemeContext } from "./providers/ThemeContext";
import { fontType } from "./types/fonts";

export const fonts: fontType[] = [
  { id: 1, name: "Sans Serif", value: "font-sans" },
  { id: 2, name: "Serif", value: "font-serif" },
  { id: 3, name: "Mono", value: "font-mono" },
];

const themeStyles = {
  fontColor: { light: "text-charcoal-dark", dark: "text-white" },
  background: { light: "bg-white", dark: "bg-gray-deep-very-dark" },
};

const App = () => {
  //TODO add routing
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [enteredWord, setEnteredWord] = useState("");
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        "h-full min-h-screen",
        themeStyles.background[theme.currentTheme]
      )}
    >
      <div
        className={classNames(
          "mx-6 flex flex-col gap-6 pb-20 pt-6 md:mx-auto md:w-1/2 md:gap-14 md:pb-28 md:pt-14",
          selectedFont.value,
          themeStyles.fontColor[theme.currentTheme]
        )}
      >
        <Header setSelectedFont={setSelectedFont} selectedFont={selectedFont} />
        <SearchBar setEnteredWord={setEnteredWord} />
        <WordDisplay
          enteredWord={enteredWord}
          setEnteredWord={setEnteredWord}
        />
      </div>
    </div>
  );
};

export default App;
