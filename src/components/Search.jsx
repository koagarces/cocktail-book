import { useEffect } from "react";
import { useState } from "react";
import { getCocktailByName } from "../services/cocktailData";
import Pagination from "./Pagenation";
const Search = () => {
  const [searchBar, setSearchBar] = useState("");
  const [cocktails, setCocktails] = useState([]);
  let searchSubmitted = false;

  console.log(searchBar);
  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };

  const fetchCocktails = async (event) => {
    event.preventDefault();
    setCocktails(await getCocktailByName(searchBar));
  };

  return (
    <form onSubmit={fetchCocktails}>
      <input
        className="searchBox"
        type="text"
        name="searchItem"
        placeholder="Find a CockTail!"
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Submit" disabled={false} />
      <div>
        <ul>
          {cocktails.map((cocktail) => (
            <div>
              <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
              <img src={cocktail.strDrinkThumb} />
            </div>
          ))}
        </ul>
      </div>
      <Pagination />
    </form>
  );
};

export default Search;
