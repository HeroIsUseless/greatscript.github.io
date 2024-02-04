# JS#
## Overview
### 设计纲领
* 必须比TS的代码量少，尽量比JS的代码量少
* TS没有实现的特性，JS#也没必要实现，首先保证JS#代码量少的特性
* 语法不可以与JS/TS的语法相悖，尽量相似/统一
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
// 类型在值之后，表示值统一定义，类型统一定义，例如：
a? : 0 # number
// 这样会少写一些类型，比较方便：
x? : y? : z? : 0 # number
// 类型在值之前，表示值统一定义，类型各自定义，例如：
a? # number : 0
// 这样会比较精确，但实际工作场景一般也不会这么做吧：
a? # number : b? # number | string : 0
```
解释：

~~**为什么用感叹号！定义常量**~~

~~因为在TS中，感叹号！为非空断言符，JS#也准备将感叹号！作为非空断言符，非空断言与常量的稳定性有相似的语义，因此用感叹号！定义常量~~

**普通定义的都是常量**

一方便是为了安全性，另一方面与函数/类的定义相统一，而且常量定义更简单诱导你尽量 都用常量。

**为什么用问号？定义变量？**

因为在JS中，有可选链 ?. 的语法，蕴含着undefined的变化语义，与变量有相似的语义，因此用问号？定义变量。

**为什么用 # 定义类型？**

因为类型本质上是一种注释，在转译成JS后会像普通注释一样完全剔除，并且在其他语言例如Python中，#作为注释符，因此我设定在JS#，用#来定义类型，作为一种可以放入代码逻辑中的“注释”，与一般用//开头的普通注释相区分。

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
myFun(x #number, y #number) #number : (
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
