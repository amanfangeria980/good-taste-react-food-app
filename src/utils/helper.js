export function filterData(searchInput, allRestaurants) {
    const data = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return data;
  }
  