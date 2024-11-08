import React from "react";
import SearchFormReset from "../shared/searchFormReset";
import { Search } from "lucide-react";

const SearchForm = () => {
  const query = "test";

  

  return (
    <form action="/" className="search-form">
      <input
        name={query}
        defaultValue=""
        className="search-input"
        placeholder="Search Startup..."
      />

<div className="flex gap-2">
                {query && <SearchFormReset />}

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5" />
                </button>
            </div>
    </form>
  );
};

export default SearchForm;
