Potter Lang is a dynamically typed, turing complete programming language inspired by the Harry Potter Universe.


### Comments

Whenever Harry was stuck in the dark, 'Lumos' showed him the way! Comments play the same role in Potter_Programming. Comments are followed by the keyword _lumos_

`lumos this is a comment`

### Data Types

Potter_Programming has 5 diffrent data types
* #### Numbers-
Numbers in Potter_programming are double-precision floating point numbers, stored according to the IEEE 754 standard.
* #### Boolean-
A logical entity having two values either _true_ or _false_. The keywords _a wizard_ for True and _a muggle_ for False or directly _true_ or _false_ are valid.

`Harry is a wizard` <br> `lumos Variable called Harry has value True`

`Harry is true`        <br>     `lumos same as above statement, both are valid`

`Dudley is a muggle` <br>        `lumos Variable called Dudley has value false`

`Dudley is false` <br>          `lumos same as above statement, both are valid`

* #### String-
Potter Lang strings are sequences of 16-bit unsigned integer values representing UTF-16 code units. Anything written in double quotes ("") or singe quotes ('') will be considered a string.

* #### Invisible-
This is a fun data type unique to Potter Lang. It is like Harry's Invisibility Cloak! Whatever is assigned _invisible_ has no value. And no, it is not null!

### Arithematic

#### Operators
Addition takes place between two numbers and the result is equated to a number.

| Operator | Operation | Alias |
| --- | ---| ---|
| + | Addition | Engorgio, +|
| --- | ---| ---|
| - | Subtraction | Reducio, -|
| --- | ---| ---|
| * | Multiplication | Gemino, *|
| --- | ---| ---|
| / | Division | Sectumsepra, /|
| --- | ---| ---|
| = | equate | is, =|

#### Increment and Decrement -
The keyword for incrementing a number by 1 is _ascendio_. The common syntax of other languages _++_ also works.

The keyword for decrementing a number by 1 is _descendio_. The common syntax of other languges _--_ also works.

`100 points to gryffindor` <br> `ascendio gryffindor` <br> `descendio gryffindor`

#### Comparision
Similar to the single-equals operator in Visual Basic and some scripting languages, the _is_ keyword in Potter Lang is interpreted differently depending whether it appears as part of a statement or as part of an expression. _isn't_ is the logical negation of the _is_ keyword.

Comparison in Potter Lang can only be done within an expression.

`dobby is free` initialises the variable `doobby` with the value  of `free`.

`If dobby is free` - will execute the following block if, and only if, the variable `dobby` is equal to `free`

Potter Lang supports the following comparision syntax:

* `is ahead of` or `>` denotes 'greater than'
* `is behind` or `<` denotes 'less than'
* `is as high/great/big/strong as` or `>=` denotes greater than equal to
* `is as low/little/small/weak as` or <= denotes less than equal to

#### Logical Operators
Potter Lang has 4 different logical operators that first convert their operand(s) to a boolean.

* `A and B` returns the Conjunction
* `A or B` returns Disjunction
* `A nor B` returns Joint Denial
* `not A` returns the negation of `A`
