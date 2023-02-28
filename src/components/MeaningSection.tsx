const MeaningSection = ({
  meaning,
}: {
  meaning: {
    partOfSpeech: string;
    definitions: [
      {
        definition: string;
        example?: string;
        synonyms: string[];
        antonyms: string[];
      }
    ];
  };
}) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-5">
        <span className="text-base font-bold italic">
          {meaning.partOfSpeech}
        </span>
        <div className="h-[1px] w-full bg-white-smoke"></div>
      </div>
      <div className="mt-10 mb-6">
        <span className="text-gray-dark">Meaning</span>
        <ul className="ml-6 mt-6 list-disc space-y-3.5 marker:text-purple-medium-deep">
          {meaning.definitions.map((definition) => {
            return <li key={definition.definition}>{definition.definition}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MeaningSection;
