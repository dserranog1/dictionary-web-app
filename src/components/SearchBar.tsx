import classNames from "classnames";
import { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import SearchIcon from "../assets/icon-search.svg";

const themeStyles = {
  background: { light: "bg-gray-lightest", dark: "bg-gray-deep-dark" },
};

const SearchBar = ({
  enteredWord,
  setEnteredWord,
}: {
  enteredWord: string;
  setEnteredWord: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { theme } = useContext(ThemeContext);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enteredWord) {
      setIsFieldEmpty(true);
    } else {
      //handle submit
    }
  };
  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <input
        className={classNames(
          "w-full h-16 rounded-2xl p-6 focus:outline-none font-bold focus:border-[1px] focus:border-purple-medium-deep z-0",
          themeStyles.background[theme.currentTheme],
          isFieldEmpty && "border-[1px] border-red-bright"
        )}
        type="search"
        name="query"
        id="smth"
        placeholder="Search for any word.."
        value={enteredWord}
        onChange={(e) => {
          setEnteredWord(e.target.value);
          e.target.value && setIsFieldEmpty(false);
        }}
      />
      {isFieldEmpty && (
        <span className="text-red-bright mt-2">Whoops, cant be empty…</span>
      )}
      <button>
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="absolute top-6 w-4 right-6 "
        />
      </button>
    </form>
  );
};

export default SearchBar;
