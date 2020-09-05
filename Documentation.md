PotterCode is a dynamically typed, turing complete programming language inspired by the Harry Potter Universe, developed for the DelhiHacks Hackathon! Creeating a language is a huge task and I still cannot believe we accomplished so much. 
PotterCode is still under development and a lot of functionalities are still to be added. There probably are a lot of bugs too, but under the given time limit, this was the best we could do and i'm proud of my team!



### Comments

Whenever Harry was stuck in the dark, 'Lumos' showed him the way! Comments play the same role in PotterCode. Comments are followed by the keyword `lumos`

`lumos this is a comment`

### Input/Output
Professor Dumbledore uses 'Sonorous' spell so that all of Hogwarts can hear him! Use the `sonorous` keyword to take input from (Listen to) the user and store it in a variable. `Input` keyword is also valid. 

* `sonorous hermione` - read one line of input from STDIN and store it in variable `hermione`

Use the `spell` keyword to write the value of a variable or string to STDOUT. The keyword `print` is also valid.

* `spell "Hello World"`
* `spell harry`


### Data Types

PotterCode has 5 diffrent data types
 #### Numbers-
Numbers in PotterCode are double-precision floating point numbers, stored according to the IEEE 754 standard.(It means that they can be bigger than the points Dumbledore awards to Gryffindor ;-)
 #### Boolean-
A logical entity having two values either _true_ or _false_. We obviously assigned wizards as true, and muggles as false ;-D The keywords `a wizard` for True and `a muggle` for False or directly `true` or `false` are valid.

`Harry is a wizard` <br> `lumos Variable called Harry has value True`

`Harry is true`        <br>     `lumos same as above statement, both are valid`

`Dudley is a muggle` <br>        `lumos Variable called Dudley has value false`

`Dudley is false` <br>          `lumos same as above statement, both are valid`

 #### String-
PotterCode strings are sequences of 16-bit unsigned integer values representing UTF-16 code units. Anything written in double quotes ("") be considered a string.

#### Null-
Null - the null type. Evaluates as equal to zero and equal to false. 

 #### Invisible-
This is a fun data type unique to PotterCode. It is like Harry's Invisibility Cloak! Whatever is assigned `invisible` has no value. And no, it is not null!

### Arithematic

#### Operators
Addition takes place between two numbers and the result is equated to a number. Same is valid for all the basic operations.

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
The keyword for incrementing a number by 1 is `ascendio`. The common syntax of other languages `++` also works.

The keyword for decrementing a number by 1 is `descendio`. The common syntax of other languges `--` also works.

`100 points to gryffindor` <br> `ascendio gryffindor` <br> `descendio gryffindor`

#### Comparision
Similar to the single-equals operator in Visual Basic and some scripting languages, the `is` keyword in PotterCode is interpreted differently depending whether it appears as part of a statement or as part of an expression. `isn't` is the logical negation of the `is` keyword.

Comparison in PotterCode can only be done within an expression.

`dobby is free` initialises the variable `doobby` with the value  of `free`.

`If dobby is free` - will execute the following block if, and only if, the variable `dobby` is equal to `free`

PotterCode supports the following comparision syntax:

* `is ahead of` or `>` denotes 'greater than'
* `is behind` or `<` denotes 'less than'
* `is as high/great/big/strong as` or `>=` denotes greater than equal to
* `is as low/little/small/weak as` or <= denotes less than equal to

This syntax is just like English, easy to remember!

#### Logical Operators
PotterCode has 4 different logical operators that first convert their operand(s) to a boolean.

* `A and B` returns the Conjunction
* `A or B` returns Disjunction
* `A nor B` returns Joint Denial
* `not A` returns the negation of `A`


### Flow Control and Block Syntax

To keep things simple, PotterCode doesn't use parenthesis or even indentations. Rather it breaks the program into blocks. You just leave a line after every conditional or loop and that's it! Pretty nifty right! 

#### Conditionals
Conditional expressions start with the `If` keyword, followed by an expression. If the expression evaluates to true, then the subsequent code block is executed. Optionally, an `Else` block can be written after an `If` block. The code block following the `Else` keyword would be executed if the `If` expression evaluated to false.

For the purpose of conditional expressions, _0_, _invisible_, _null_, _false_, and the empty string all evaluate to _false_, and everything else to _true_.

#### Loops
Similar to the `If` statement, a loop is denoted by the `While` or `Until` keyword, which will cause the subsequent code block to be executed repeatedly whilst the expression is satisfied

 `harry is 10` <br>
 `while harry is ahead of 0`<br>
`descendio harry`

#### Blocks
A block in PotterCode starts with an `If`, `Else`, `While` or `Until` statement, and is terminated by a blank line or the end-of-file. EOF ends all open code blocks. So please remember to leave a line after **Conditionals**, **Loops** and **Functions** (explained below).

### Functions
The keyword for declaring a function is `horcrux` followed by the function name and its parameters in parenthesis. The keyword `def` also works in the place of `horcrux` .

Did you get why we used `horcrux`? Because just like a Horcrux contains a part of the soul, a function contains part of the program! But unlike your soul, you can divide the program into as many parts as you like ;-) 

`horcrux nultiply (X,Y)`

The function body is a list of statements with no separating blank lines. A blank line denotes the end of a function body. Functions in PotterCode always have a return value, indicated by the `depulso` keyword. Depulso is the banishing charm, antonym of accio!

The keyword `return` also works.

Functions are called using (you guessed it!) the `accio` keyword followed by the function name and function arguments(At least one argument is compulsory) in parenthesis. Multiple arguments are separated with `and` or commas.

`horcrux nultiply (X,Y)` <br>
`depulso X gemino Y` <br>
` ` <br>
`ans is accio multiply(2,4)`
<br>



