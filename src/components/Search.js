import React from "react";

const Search = () => {
  return (
    <div className="p-5 bg-pink-50 my-5">
      <input
        type="text"
        className="focus:bg-green-50 p-2 m-2"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button
        className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-lg"
        onClick={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
