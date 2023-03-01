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
  // console.log(meaning);
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
