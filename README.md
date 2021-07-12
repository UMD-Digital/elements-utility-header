# &lt;umd-utility-header&gt; element

## Installation

```
$ yarn add @umd/utilityheader
```

## Basic Usage

#### Import the utility header in your js if you bundle using a transpile with babel or typescript.

```js
import '@umd/utilityheader';
```

#### HTML usage

```html
<umd-utility-header
  search
  events
  news
  schools
  admissions
  gift
  size="1024px"
  padding="20"
>
</umd-utility-header>
```

## Attribute options

1. Search - Includes the search form
2. Events - Adds a link to UMD Calendar
3. News - Adds a link to UMD Today
4. Schools - Adds a link to UMD Colleges/schools list
5. Admissions - Adds a link to Admissions overview
6. Gift - Adds a link to giving.umd.edu
7. Size - Sets maximum width of header contents (for layout consistency)
8. Padding - Sets the horizontal padding size (for layout consistency)

## More Example Usage

#### Include gift link and sets the gutters (padding) to be 20px

```html
<umd-utility-header gift padding="20"> </umd-utility-header>
```

#### Include the search form and events link. Adding search="domain" will set the search focus to current site (example on diversity.umd.edu, the search will default to diversity content)

```html
<umd-utility-header search="domain" events> </umd-utility-header>
```

## License

Distributed under the MIT license. See LICENSE for details.
