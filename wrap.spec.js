const { expect } = require("chai");
const wrap = require("./wrap");
const lorem =
  "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
const cols = 20;

describe("wrap", () => {
  it("is a function", () => {
    expect(wrap).to.be.an("function");
  });
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("returns a string value", () => {
    expect(wrap(lorem, cols)).to.be.an("string");
  });
  it("wraps a given string according to the columns paramater provided", () => {
    expect(wrap(lorem, cols)).to.equal(
      "Lorem ipsum dolor \nsit eu amet, elit na \nmagna sem amet nulla \nvel purus ac ligula."
    );
  });
});

// no words get broken up
// no column is longer than the parameter
// returns a string
// returns an empty string if an empty string is provided
