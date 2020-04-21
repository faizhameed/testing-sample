const fetch = require("node-fetch");

const getPeople = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

/* Async Await */
const getPeoplePromise = async (fetch) => {
  const getResponse = await fetch("https://swapi.dev/api/people");
  const resData = await getResponse.json();
  return await { count: resData.count, results: resData.results };
};

getPeoplePromise(fetch);

module.exports = {
  getPeople,
  getPeoplePromise,
};
