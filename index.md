# JS#
## Overview
### Comparison to JS
#### Semicolon
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| Rules enforced by linter/formatter  | No semicolon needed! |

#### Comments
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `// Line comment`  | Same |
| `/* Comment */`  | Same |
| `/** Doc Comment */`  | Same |

#### Variable
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `const x = 5;`  | `x : 5` |
| `var x = y;`  | `x? : y` |
| `let x = 5; x = x + 1;`  | `x? : 5, x = x + 1` |

more

```
// 类型定义和值定义在顺序上并无特殊规定，但不同顺序有一些区别：
a : 0 # number // 类型在值之后，表示值统一定义，类型统一定义，例如：
a : b? : 0 # number
a # number : 0 // 类型在值之前，表示值统一定义，类型各自定义，例如：
a # number : b? # number | string : 0
```

解释：

为什么用问号定义变量？

因为与JS的可选链语法 ?. ，比较相似，寓意该变量说不定可能是undefined之类的。
感叹号！在TS中为非空断言声明，跟变量危险含义相悖，故不用感叹号！。

#### String & Character
|  JAVASCRIPT   | JS#  |
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
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `true`, `false`  | Same |
| `!true`  | Same |

#### Object/Record
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| no types  | `point() : {x: 30 #number, y?: 20 #number}` |
| `{x: 30, y: 20}`  | Same |
| `point.x`  | Same |
| `point.y = 30;`  | Same |
| `{...point, x: 30}`  | Same |

more

`{{...} : point, x : 30}`

#### Function
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `arg => retVal`  | `(arg #Arg) : retVal` |
| `function named(arg) {...}`  | `named(arg #Arg) : (...)` |
| `const f = function(arg) {...}`  | `f(arg #Arg) : (...)` |
| `add(4, add(5, 6))`  | Same |

more

`add(a: 0 #number, b: 0 #number) #number : async(a+b)`

#### Blocks
##### JAVASCRIPT
```
const myFun = (x, y) => {
  const doubleX = x + x;
  const doubleY = y + y;
  return doubleX + doubleY;
};
```
##### JS#
```
myFun(x #number, y #number) : (
  doubleX : x + x
  doubleY : y + y
  doubleX + doubleY
)
```

#### If-else
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `if (a) {b} else {c}`  | `if(a, b, c)` |
| `a ? b : c`  | `if(a, b, c)` |

more

```
if exp (
  ...
) else if exp (
  ...
) else (
  ...
)
```
```
switch var (
  case val1 (
    ...
  )
  case val2 (
    ...
  )
  default (
    ...
  )
)
```

#### Destructuring
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `const {a, b} = data`  | `{a, b} : data` |
| `const [a, b] = data`  | `[a, b] : data` |
| `const {a: aa, b: bb} = data`  | `{aa : a, bb : b} : data` |

more

`{a, b?, c?} # {a #number, b? #string, c? #number} : data`

`{a #number, b? #string, c? #number} : data`

#### Use with React
##### JAVASCRIPT
```
import React, {useState} from 'react';

export function CountView() {
  const [count, setCount] = useState(0);
  const onBtnClick = () => {
    setCount(count + 1);
  };
  return <Button onClick={onBtnClick}>{count}</Button>;
}
```
##### JS#
```
{useState} : React : import('react')

CountView() : (
  [count, setCount] : useState(0)
  onBtnClick() : (
    setCount(count + 1)
  )
  <Button onClick:onBtnClick>`count`</Button>
)
```
