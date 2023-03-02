const MeaningSection = ({
  meaning,
}: {
  meaning: {
    partOfSpeech: string;
    definitions: [
      {
        definition: string;
        example?: string;
      }
    ];
    synonyms?: string[];
    antonyms?: string[];
  };
}) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-5">
        <span className="text-lg font-bold italic md:text-2xl">
          {meaning.partOfSpeech}
        </span>
        <div className="h-[1px] w-full bg-white-smoke"></div>
      </div>
      <div className="mt-4 mb-6 md:mt-7">
        <span className="text-base text-gray-dark md:text-lg">Meaning</span>
        <ul className="ml-6 mt-6 list-disc space-y-3.5 text-sm marker:text-purple-medium-deep md:text-lg">
          {meaning.definitions.map((definition, idx) => {
            return (
              <div key={idx}>
                <li>
                  {definition.definition}
                  <div className="mt-3 text-gray-dark">
                    {definition.example && '"' + definition.example + '"'}
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MeaningSection;
