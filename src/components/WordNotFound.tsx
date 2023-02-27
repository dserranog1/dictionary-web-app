const WordNotFound = () => {
  return (
    <div className="mt-32 flex flex-col items-center gap-11">
      <span className="text-7xl">😕</span>
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-xl font-bold">No Definitions Found</h2>
        <p className="text-base font-normal text-gray-dark">
          Sorry pal, we could not find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default WordNotFound;
