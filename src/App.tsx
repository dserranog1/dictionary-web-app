import classNames from "classnames";
import { useState } from "react";
import Header from "./components/Header";
import { fontType } from "./types/fonts";

export const fonts: fontType[] = [
  { id: 1, name: "Sans Serif", value: "font-sans" },
  { id: 2, name: "Serif", value: "font-serif" },
  { id: 3, name: "Mono", value: "font-mono" },
];

const App = () => {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center mx-96",
        selectedFont.value
      )}
    >
      <Header
        setSelectedFont={setSelectedFont}
        selectedFont={selectedFont}
      ></Header>
      <body>rest of the body goes here</body>
    </div>
  );
};

export default App;
