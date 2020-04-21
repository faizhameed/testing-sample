const GOOGLE_DATA_base = [
  "cats.com",
  "souprecipe.com",
  "catdogs.com",
  "myfavbooks.com",
  "flocks.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("s"));

module.exports = googleSearch;
