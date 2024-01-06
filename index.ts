import { __, curry } from "ramda";

const Str = {
  at: curry((i: number, s: string) => s.at(i)),
  charAt: curry((i: number, s: string) => s.charAt(i)),
  codePointAt: curry((i: number, s: string) => s.codePointAt(i)),
  concat: (...strings: string[]) => "".concat(...strings),
  endsWith: curry(
    (
      seedStr: string,
      searchStr: string,
      endPosition: number = seedStr.length,
    ) => seedStr.endsWith(searchStr, endPosition),
  ),
  includes: curry((seedStr: string, searchStr: string, position: number = 0) =>
    seedStr.includes(searchStr, position),
  ),
};

// Simple demos

console.log(Str.concat("Hello", " ", "World")); // Hello World
console.log(Str.endsWith("Hello World", "World")); // true
console.log(Str.endsWith("Hello World", "Wor", 9)); // true

// Curry demos
const firstChar = Str.at(0); // Example of partial application
const charOfHello = Str.at(__, "hello"); // Example of Ramda arg placeholders

console.log(firstChar("Hello")); // H
console.log(charOfHello(0)); // h

console.log(Str.includes("Hello World")("World")); // true
console.log(Str.includes("Hello World")("Hello", 1)); // false
