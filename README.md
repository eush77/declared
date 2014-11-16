# declared [![Build Status][travis-badge]][travis] [![Code Climate][codeclimate-badge]][codeclimate] [![Dependency Status][david-badge]][david]

[![npm](https://nodei.co/npm/declared.png)](https://nodei.co/npm/declared/)

[travis]: https://travis-ci.org/eush77/declared
[travis-badge]: https://travis-ci.org/eush77/declared.svg
[codeclimate]: https://codeclimate.com/github/eush77/declared
[codeclimate-badge]: https://codeclimate.com/github/eush77/declared/badges/gpa.svg
[david]: https://david-dm.org/eush77/declared
[david-badge]: https://david-dm.org/eush77/declared.png

`declared` is a module for setting default values for optional arguments.

Actually, it is a bit more general than that. It takes a bunch of values, and simply returns the first value that is "!= undefined".

The problem it is solving is that in JavaScript the argument is considered omitted if it is either `null` or `undefined` (common convention), but there's no built-in operator for this.

The closest thing is logical or (`||`), but it is not quite what we want.

```js
> '' || 'default'
'default'
```

This module is a counterpart to @substack's [defined](https://www.npmjs.org/package/defined) which checks for strong equality for some reason (and does not work for `null`s).

## Example

```js
// Say description is optional.
function describe(name, description) {
  description = declared(description, 'coolest thing ever!');
  return [name, description];
}

> describe('x', 'my description')
[ 'x', 'my description' ]
> describe('x', '')
[ 'x', '' ]

// null and undefined both stand for the default value.
> describe('x', null)
[ 'x', 'coolest thing ever!' ]
> describe('x', undefined)
[ 'x', 'coolest thing ever!' ]
```

## API

### declared([value]...)

Return the first argument that is "!= undefined" (or "!= null", which is [the same thing](http://es5.github.io/#x11.9.3)). If all arguments are undefined, just return `undefined`.

Equivalent chain of conditional statements:

```js
if (value0 != null) {
  return value0;
}
else if (value1 != null) {
  return value1;
}
/* ... */
else if (valueN != null) {
  return valueN;
}
else {
  return undefined;
}
```

## Install

```shell
npm install declared
```

## License

MIT