# std-fns

This is an MVP of an idea I've had for a while about standardising the JS standard lib syntax.

The functions available here all use a common (and more importantly simple) function syntax.

## Why?

Teaching JavaScript as a first language is really hard because we have many ways to call functions [^1].

For example, have a read of this typically trivial "beginner" funtion.

How many ways to invoke functions can you count?

```ts
function greet(lastName: string) {
  const lastNameLowerCase = lastName.toLowerCase();

  if (lastNameLowerCase.includes("world")) {
    return "Hello, Mr. Predictable";
  }

  return "Hello, " + lastName;
}

console.log(greet("Mr. World"));
```

Answer: Three! Try explaining that to a n00b... It's much easier to write/read code which has a single,
standard way to call functions and pass in arguments. This tiny lib aims to make JS/TS easier for us all.

[^1]: Functions, instance and static methods will be used interchangeable here

Using `std-fns` we can make this code _much_ easier to read and explain:

```ts
function greet(lastName: string) {
  const lastNameLowerCase = Str.toLowerCase(lastName);

  if (Str.includes(lastNameLowerCase, "world")) {
    return "Hello, Mr. Predictable";
  }

  return Str.concat("Hello, ", lastName);
}

console.log(greet("Mr. World"));
```

And once you understand and can use partical application, you can make it even nicer:

```ts
const includesWorld = Str.includes(__, "world");

function greet(lastName: string) {
  const lastNameLowerCase = Str.toLowerCase(lastName);

  if (includesWorld(lastNameLowerCase)) {
    return "Hello, Mr. Predictable";
  }

  return Str.concat("Hello, ", lastName);
}

console.log(greet("Mr. World"));
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
