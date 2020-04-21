const GoogleSearch = require("./script.js");

let dbMock = ["dog.com", "cheese.com", "disney.com"];

test("Searching for cat", () => {
  let list = GoogleSearch("cat", dbMock);
  expect(list).toEqual([]);
});

it("another array test", () => {
  expect(GoogleSearch(undefined, dbMock)).toEqual([]);
  expect(GoogleSearch("do", dbMock)).toEqual(["dog.com"]);
});
