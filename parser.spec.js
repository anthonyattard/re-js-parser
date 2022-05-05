import { Parser } from "./parser.js";
import { expect } from "chai";
const parser = new Parser();

describe("address", function () {
  it("should not throw an error", function () {
    var addy = "1927-31 C Ave, National City, CA 91950";
    const res = parser.runParse(addy);
    expect(res.city).to.equal("National City");
    expect(res.state).to.equal("ca");
    expect(res.zip).to.equal("91950");
  });

  it("should not throw an error", function () {
    var addy = "12345 Main St, Portland, OR 87423-3241";
    const res = parser.runParse(addy);
    expect(res.city).to.equal("Portland");
    expect(res.state).to.equal("or");
    expect(res.zip).to.equal("87423");
  });

  it("should not throw an error", function () {
    var addy = "4402 Mentone #107, San Diego, CA 92107";
    const res = parser.runParse(addy);
    expect(res.city).to.equal("San Diego");
    expect(res.state).to.equal("ca");
    expect(res.zip).to.equal("92107");
  });
  it("should not throw an error", function () {
    var addy = "4791-93 Jutland, San Diego, CA 92117";
    const res = parser.runParse(addy);
    expect(res.city).to.equal("San Diego");
    expect(res.state).to.equal("ca");
    expect(res.zip).to.equal("92117");
  });
});
