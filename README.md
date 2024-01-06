# std-fns

This is an MVP of an idea I've had for a while about standardising the JS standard lib syntax.

The functions available here all use a common (and more importantly simple) function syntax.

## Why?

Teaching JavaScript as a first language is really hard because we have many ways to call functions\*.

For example, have read of this typically trivial "beginner" funtion.

How many ways to invoke functions can you count?

```
function greet(lastName: string) {
    if (lastName.includes('World')) {
      return 'Hello, Mr. Predictable';
    }

    return "Hello, " + lastName;
}

console.log(greet("World"));
```

Answer: Three! Try explaining that to a n00b... It's much easier to write/read code which has a single,
standard way to call functions and pass in arguments. This tiny lib aims to make JS/TS easier for us all.

- Functions, instance and static methods will be used interchangeable here

## Test drive

To install dependencies (with [bun](https://bun.sh/)):

```bash
bun install
```

To run:

```bash
bun run index.ts
```
