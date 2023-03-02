import { WordType } from "../types/words";

export const checkForAvailableAudio = (wordInformation: WordType[number]) => {
  let audioUrl: string | undefined;
  if (wordInformation.phonetics.length > 0) {
    audioUrl = wordInformation.phonetics[0].audio;
    let i = 1;
    while (!audioUrl) {
      if (i == wordInformation.phonetics.length) break;
      audioUrl = wordInformation.phonetics[i].audio;
      i += 1;
    }
  } else {
    audioUrl = undefined;
  }
  return audioUrl;
};
