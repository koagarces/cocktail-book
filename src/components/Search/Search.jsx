import { useEffect } from "react";
import { useState } from "react";
import { getCocktailByName } from "../../services/cocktailData";
import Pagination from "../Pagenation/Pagenation";
const Search = () => {
  const [searchBar, setSearchBar] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let head = 0;
  let tail = 5;
  let totalPages = Math.ceil(cocktails.length / 5);

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };

  const fetchCocktails = async (event) => {
    event.preventDefault();
    setCurrentPage(1);
    head = 0;
    tail = 5;
    setCocktails(await getCocktailByName(searchBar));
  };

  if (currentPage > 1) {
    head = (currentPage - 1) * 5;
    tail = head + 5;
  } else if (currentPage === 1) {
    head = 0;
    tail = 5;
  }
  let onePage = cocktails.slice(parseInt(head), parseInt(tail));

  console.log("head", head);
  console.log("onePage", onePage);

  return (
    <form onSubmit={fetchCocktails}>
      <input
        className="searchBox"
        type="text"
        name="searchItem"
        placeholder="Find a CockTail!"
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Submit" />
      <div>
        <Pagination
          totalPages={totalPages}
          head={head}
          tail={tail}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ul>
          {onePage.map((cocktail) => (
            <div>
              <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
              <img src={cocktail.strDrinkThumb} />
            </div>
          ))}
        </ul>
      </div>
      <Pagination
        totalPages={totalPages}
        head={head}
        tail={tail}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </form>
  );
};

export default Search;
