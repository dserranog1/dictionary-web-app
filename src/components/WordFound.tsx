import { WordType } from "../types/words";
import IconPlay from "../assets/icon-play.svg";
import MeaningSection from "./MeaningSection";
import { checkForAvailableAudio } from "../utils/audioCheck";
import { checkForPhoneticText } from "../utils/phoneticTextCheck";

const WordFound = ({
  wordInformation,
  setEnteredWord,
}: {
  wordInformation: WordType[number];
  setEnteredWord: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const audioUrl = checkForAvailableAudio(wordInformation);
  const phoneticText = checkForPhoneticText(wordInformation);

  const audio = new Audio(audioUrl);
  //TODO check for phonetic property
  return (
    <main className="flex w-full flex-col gap-6 md:gap-10">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold md:text-5xl">
            {wordInformation.word}
          </h1>
          <h4 className="text-lg font-normal text-purple-medium-deep md:text-2xl">
            {phoneticText}
          </h4>
        </div>
        <button
          onClick={() => {
            if (audioUrl) {
              audio.play();
            } else {
              alert("Sorry there's no sound for this word!");
            }
          }}
        >
          <img
            src={IconPlay}
            className="w-[48px] md:w-[75px]"
            alt="Play Sound Icon"
          />
        </button>
      </div>
      <div className="flex flex-col gap-7 md:gap-10">
        {wordInformation.meanings.map((meaning, idx) => {
          return (
            <div key={idx}>
              <MeaningSection meaning={meaning} />
              {meaning.synonyms && meaning.synonyms.length > 0 && (
                <div className="flex flex-row gap-5 text-base md:text-xl">
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
