Potter Lang is a dynamically typed, turing complete programming language inspired by the Harry Potter Universe.


### Comments

Whenever Harry was stuck in the dark, 'Lumos' showed him the way! Comments play the same role in Potter_Programming. Comments are followed by the keyword _lumos_

`lumos this is a comment`

### Data Types

Potter_Programming has 5 diffrent data types
 #### Numbers-
Numbers in Potter_programming are double-precision floating point numbers, stored according to the IEEE 754 standard.
 #### Boolean-
A logical entity having two values either _true_ or _false_. The keywords _a wizard_ for True and _a muggle_ for False or directly _true_ or _false_ are valid.

`Harry is a wizard` <br> `lumos Variable called Harry has value True`

`Harry is true`        <br>     `lumos same as above statement, both are valid`

`Dudley is a muggle` <br>        `lumos Variable called Dudley has value false`

`Dudley is false` <br>          `lumos same as above statement, both are valid`

 #### String-
Potter Lang strings are sequences of 16-bit unsigned integer values representing UTF-16 code units. Anything written in double quotes ("") or singe quotes ('') will be considered a string.

#### Null-
Null - the null type. Evaluates as equal to zero and equal to false. 

 #### Invisible-
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

### Input/Output
Use the _Listen_ keyword to read one line of input from STDIN. Use _Listen to_ to capture the input into a named variable. 

* `listen to hermione` - read one line of input from STDIN and store it in variable `hermione`

Use the _spell_ keyword to write the value of a variable or string to STDOUT. The keyword _print_ is also valid.

* `spell "Hello World"`
8 `spell harry`

### Flow Control and Block Syntax

#### Conditionals
Conditional expressions start with the _If_ keyword, followed by an expression. If the expression evaluates to _true_, then the subsequent code block is executed. Optionally, an _Else_ block can be written after an _If_ block. The code block following the _Else_ keyword would be executed if the _If_ expression evaluated to _false_.

For the purpose of conditional expressions, _0_, _invisible_, _null_, _false_, and the empty string all evaluate to _false_, and everything else to _true_.

#### Loops
Similar to the _If_ statement, a loop is denoted by the _While_ or _Until_ keyword, which will cause the subsequent code block to be executed repeatedly whilst the expression is satisfied

 `harry is 10` <br>
 `while harry is ahead of 0`<br>
`descendio harry`

#### Blocks
A block in Potter Lang starts with an _If_, _Else_, _While_ or _Until_ statement, and is terminated by a blank line or the end-of-file. EOF ends all open code blocks.

### Functions
Functions are declared with a variable name followed by the _takes_ keyword and a list of arguments separated by _and_

`Multiply takes X and Y`

The function body is a list of statements with no separating blank lines. A blank line denotes the end of a function body. Functions in Potter Lang always have a return value, indicated by the _Give back_ keyword.

Functions are called using the _accio_ keyword and must have at least one argument. Multiple arguments are separated with _and_.

`multiply takes X and Y` <br>
`give back X gemino Y` <br>
` ` <br>
`ans accio 2 and 4`




