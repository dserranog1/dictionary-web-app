import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import SearchIcon from "../assets/icon-search.svg";

const themeStyles = {
  background: { light: "bg-gray-lightest", dark: "bg-gray-deep-dark" },
};

const SearchBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <form className="w-full relative">
      <input
        className={classNames(
          "w-full h-16 rounded-2xl p-6 focus:outline-none font-bold focus:border-[1px] focus:border-purple-medium-deep z-0",
          themeStyles.background[theme.currentTheme]
        )}
        type="search"
        placeholder="Search for any word.."
      />
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="absolute top-6 w-4 right-6 "
      />
    </form>
  );
};

export default SearchBar;
