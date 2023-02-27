import { useEffect, useState } from "react";
import { WordType } from "../types/words";
import WordNotFound from "./WordNotFound";

const helloWord: WordType = [
  {
    word: "hello",
    phonetic: "hə'ləʊ",
    phonetics: [
      {
        text: "hə'ləʊ",
        audio:
          "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
      },
      {
        text: "hɛ'ləʊ",
      },
    ],
    origin: "early 19th century: variant of earlier hollo ; related to holla.",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          {
            definition: "used as a greeting or to begin a phone conversation.",
            example: "hello there, Katie!",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "an utterance of 'hello'; a greeting.",
            example: "she was getting polite nods and hellos from people",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "say or shout 'hello'.",
            example: "I pressed the phone button and helloed",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
  },
];

const WordDisplay = ({ enteredWord }: { enteredWord: string }) => {
  const [isWordDefined, setIsWordDefined] = useState<boolean>(true);
  const [wordInformation, setWordInformation] = useState<WordType[number]>(
    helloWord[0]
  );
  useEffect(() => {
    const lookForWord = async () => {
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`
        );
        if (res.ok) {
          const jsonResponse: WordType = await res.json();
          setWordInformation(jsonResponse[0]);
          setIsWordDefined(true);
        } else {
          //TODO handle 4xx and 5xx errors
          setIsWordDefined(false);
        }
      } catch {
        //TODO handle network error
      }
    };
    if (enteredWord) {
      lookForWord();
    }
  }, [enteredWord]);
  if (isWordDefined) {
    return (
      <div>
        displaying word <h1>{wordInformation.word}</h1>
      </div>
    );
  }
  return <WordNotFound />;
};

export default WordDisplay;
