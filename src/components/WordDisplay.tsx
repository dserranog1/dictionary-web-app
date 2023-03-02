import { useEffect, useState } from "react";
import { WordType } from "../types/words";
import WordFound from "./WordFound";
import WordNotFound from "./WordNotFound";

const helloWord: WordType = [
  {
    word: "hello",
    phonetic: "hə'ləʊ",
    sourceUrls: ["https://en.wiktionary.org/wiki/hello"],
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
          },
        ],
      },
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "an utterance of 'hello'; a greeting.",
            example: "she was getting polite nods and hellos from people",
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "say or shout 'hello'.",
            example: "I pressed the phone button and helloed",
          },
        ],
      },
    ],
  },
];

const WordDisplay = ({
  enteredWord,
  setEnteredWord,
}: {
  enteredWord: string;
  setEnteredWord: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
        <WordFound
          wordInformation={wordInformation}
          setEnteredWord={setEnteredWord}
        />
        <a
          href={wordInformation.sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:cursor-pointer hover:underline"
        >
          <div className="h-[1px] w-full bg-white-smoke"></div>
          <div className="mt-5 text-sm ">
            <span className="text-gray-dark">Source:</span>{" "}
            {wordInformation.sourceUrls[0]}
          </div>
        </a>
      </div>
    );
  }
  return <WordNotFound />;
};

export default WordDisplay;
