import { WordType } from "../types/words";
import IconPlay from "../assets/icon-play.svg";
import MeaningSection from "./MeaningSection";

const WordFound = ({
  wordInformation,
  setEnteredWord,
}: {
  wordInformation: WordType[number];
  setEnteredWord: React.Dispatch<React.SetStateAction<string>>;
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
        {wordInformation.meanings.map((meaning, idx) => {
          return (
            <div key={idx}>
              <MeaningSection meaning={meaning} />
              {meaning.synonyms && meaning.synonyms.length > 0 && (
                <div className="flex flex-row gap-5">
                  <span className="text-gray-dark">Synonyms </span>
                  <div className="mb-5 flex flex-row flex-wrap gap-2">
                    {meaning.synonyms.map((synonym, idx) => {
                      return (
                        <button
                          onClick={() => {
                            setEnteredWord(synonym);
                          }}
                          className="font-bold text-purple-medium-deep hover:underline"
                          key={idx}
                        >
                          {synonym}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default WordFound;
