# GreatScript
## Overview
### Comparison to JS
#### Semicolon
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| Rules enforced by linter/formatter  | No semicolon needed! |

#### Comments
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `// Line comment`  | `# Line comment` |
| `/* Comment */`  | `## Comment ##` |
| `/** Doc Comment */`  | `#DocFunc comment` |

#### Variable
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `const x = 5;`  | `x : 5` |
| `var x = y;`  | `x! : y` |
| `let x = 5; x = x + 1;`  | `x! : 5, x? : x + 1` |

more

`a: Int | undefined`

#### String & Character
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `"Hello world!"`  | `'Hello world!'` |
| `'Hello world!'`  | Same |
| `"hello " + "world"`  | `'hello ' + 'world'` |
| ``` `hello ${message}` ```  | ``` 'hello `message`'``` |

more

```
"Hello
World"
```

#### Boolean
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `true`, `false`  | Same |
| `!true`  | `~true` |

#### Object/Record
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| no types  | `point() : {x: Int, y!: Int}` |
| `{x: 30, y: 20}`  | Same |
| `point.x`  | Same |
| `point.y = 30;`  | `point.y? : 30` |
| `{...point, x: 30}`  | Same |

more

`{{...} : point, x : 30}`

#### Function
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `arg => retVal`  | `(arg: Arg) : retVal` |
| `function named(arg) {...}`  | `named(arg: Arg) : (...)` |
| `const f = function(arg) {...}`  | `f(arg: Arg) : (...)` |
| `add(4, add(5, 6))`  | Same |

#### Blocks
##### JAVASCRIPT
```
const myFun = (x, y) => {
  const doubleX = x + x;
  const doubleY = y + y;
  return doubleX + doubleY
};
```
##### GREATSCRIPT
```
myFun(x:Int, y:Int) : (
  doubleX : x + x
  doubleY : y + y
  doubleX + doubleY
)
```

#### If-else
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `if (a) {b} else {c}`  | `if(a, b, c)` |
| `a ? b : c`  | `if(a, b, c)` |

more

`is(a)`

#### Destructuring
|  JAVASCRIPT   | GREATSCRIPT  |
|  ----  | ----  |
| `const {a, b} = data`  | `{a, b} : data` |
| `const [a, b] = data`  | `[a, b] : data` |
| `const {a: aa, b: bb} = data`  | `{aa: a, bb: b} : data` |

more

`{aa: a || 0, bb: b || ''} : data`

`{a, b!, c?} : data`
