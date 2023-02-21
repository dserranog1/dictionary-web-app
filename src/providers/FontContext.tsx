import { useState, createContext, PropsWithChildren } from "react";

export const fonts = [
  { id: 1, name: "Sans Serif" },
  { id: 2, name: "Serif" },
  { id: 3, name: "Mono" },
];

export const FontContext = createContext({ selectedFont: fonts[0] } as {
  selectedFont: { id: number; name: string };
  setSelectedFont: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
});

export const FontProvider = ({ children }: PropsWithChildren) => {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <FontContext.Provider value={{ selectedFont, setSelectedFont }}>
      {children}
    </FontContext.Provider>
  );
};
