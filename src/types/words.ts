export type WordType = [
  {
    word: string;
    phonetic?: string;
    sourceUrls: string[];
    phonetics: {
      text?: string;
      audio?: string;
    }[];
    origin: string;
    meanings: {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example?: string;
        }
      ];
      synonyms?: string[];
      antonyms?: string[];
    }[];
  }
];
