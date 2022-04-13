import { toTsType } from "../../../../app/Services/helpers";

describe("Types", () => {
  it("should normalize ts types", () => {
    expect(toTsType("Boolean")).toEqual("boolean");
    expect(toTsType("Number")).toEqual("number");
    expect(toTsType("String")).toEqual("string");
    expect(toTsType("Array")).toEqual("Array<any>");
    expect(toTsType("Object")).toEqual("Object");
  });
});
