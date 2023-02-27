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
    <form className="relative w-full" onSubmit={handleSubmit}>
      <input
        className={classNames(
          "z-0 h-16 w-full rounded-2xl p-6 font-bold focus:border-[1px] focus:border-purple-medium-deep focus:outline-none",
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
        <span className="mt-2 text-red-bright">Whoops, cant be empty…</span>
      )}
      <button>
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="absolute top-6 right-6 w-4 "
        />
      </button>
    </form>
  );
};

export default SearchBar;
