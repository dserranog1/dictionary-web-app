import React from "react";

export type fontType = {
  id: number;
  name: string;
  value: string;
};

export type fontSetter = React.Dispatch<React.SetStateAction<fontType>>;
