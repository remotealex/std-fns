# std-fns

A **very** simple set of (fixed arity) functions which are transparent
wrappers around the standard Javascript
[built-in object operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

## Why?

To write software with Javascript you rely on functions. Unfortunately,
many of the utilities built in to the Javascript language are housed as
[instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
which as a Javascript developer yourself, you will seldom write.

This means that your code will be littered with different function call syntax.

For example, have a read of this typically trivial "beginner" funtion.

How many ways to invoke a function[^1] can you count?

```ts
function greet(name: string) {
  const nameLowerCase = name.toLowerCase();

  if (nameLowerCase.includes("world")) {
    return "Hello, Mr. Predictable";
  }

  return "Hello, " + name;
}

console.log(greet("Mr. World"));
```

Answer: Three! It's much easier to write/read code which has a single,
standard way to call functions and pass in arguments.
This tiny suite of tools aims to make Javacsript easier for us all.

[^1]: Functions, instance and static methods will be used interchangeable here

Using `std-fns` we can make this code _much_ easier to read and explain:

```ts
function greet(name: string) {
  const nameLowerCase = Str.toLowerCase(name);

  if (Str.includes(nameLowerCase, "world")) {
    return "Hello, Mr. Predictable";
  }

  return Str.concat("Hello, ", name);
}

console.log(greet("Mr. World")); // "Hello, Mr. Predictable"
```

It also makes parameter partial application much easier:

```ts
import R from "ramda";

const includesWorld = R.partialRight(Str.includes, ["world"]);

function greet(name: string) {
  const nameLowerCase = Str.toLowerCase(name);

  if (includesWorld(nameLowerCase)) {
    return "Hello, Mr. Predictable";
  }

  return Str.concat("Hello, ", name);
}

console.log(greet("Mr. World")); // "Hello, Mr. Predictable"
```

## Test drive

To install dependencies (with [bun](https://bun.sh/)):

```bash
bun install
```

To run:

```bash
bun run index.ts
```
