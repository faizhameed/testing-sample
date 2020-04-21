const fetch = require("node-fetch");
const swapi = require("./script2");

/* it("calls swapi api with promise", (done) => {
  // we can pass a done parameter to make the test run after async calls and check the results

  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    done();
  });
});
 */

/* Or we can do like this */

it("calls swapi api with promise", () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(3);
  });
});

/* We CAN MOCK THE TEST WITH ASYNC SINCE WE DONT NEED TO TEST fetch func() */

it("calls swapi with mock", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(3);
  });
});
