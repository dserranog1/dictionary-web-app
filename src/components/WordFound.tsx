import { WordType } from "../types/words";
import IconPlay from "../assets/icon-play.svg";
import MeaningSection from "./MeaningSection";

const WordFound = ({
  wordInformation,
}: {
  wordInformation: WordType[number];
}) => {
  return (
    <main className="flex w-full flex-col gap-10">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{wordInformation.word}</h1>
          <h4 className="text-xl font-normal text-purple-medium-deep">
            {wordInformation.phonetic}
          </h4>
        </div>
        <button>
          <img src={IconPlay} className="w-[75px]" alt="Play Sound Icon" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
        {wordInformation.meanings.map((meaning) => {
          return (
            <MeaningSection meaning={meaning} key={meaning.partOfSpeech} />
          );
        })}
      </div>
    </main>
  );
};

export default WordFound;
