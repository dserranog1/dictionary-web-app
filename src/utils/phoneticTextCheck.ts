import { WordType } from "../types/words";

export const checkForPhoneticText = (wordInformation: WordType[number]) => {
  let text: string | undefined;
  if (wordInformation.phonetic) {
    text = wordInformation.phonetic;
    return text;
  }
  if (wordInformation.phonetics.length > 0) {
    text = wordInformation.phonetics[0].text;
    let i = 1;
    while (!text) {
      if (i == wordInformation.phonetics.length) break;
      text = wordInformation.phonetics[i].text;
      i += 1;
    }
  } else {
    text = undefined;
  }
  return text;
};
