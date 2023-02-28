export type WordType = [
  {
    word: string;
    phonetic: string;
    phonetics: [
      {
        text: string;
        audio: string;
      },
      {
        text: string;
      }
    ];
    origin: string;
    meanings: {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example?: string;
          synonyms: string[];
          antonyms: string[];
        }
      ];
    }[];
  }
];
