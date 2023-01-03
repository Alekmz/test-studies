const { queryString } = require("./queryString");

describe("Trasform object to query string", () => {
  it("should create a valid query string from object", () => {
    const obj = {
      name: "Alex",
      profession: "Frontend",
    };

    expect(queryString(obj)).toBe("name=Alex&profession=Frontend");
  });
});
