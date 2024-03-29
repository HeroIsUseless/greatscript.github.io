# JS#
## Overview
### 介绍
JS#可以看作又一个TypeScript，但是比TS更简约。解决的是TS过于繁琐，代码冗长的问题。以JS为基础，简约性，统一性，有类型标注，无移进规约冲突

精华仅在于定义，其他只是补充，无移进规约冲突不可能
关键在于信息的合并

比如说 a: 3|2|1，但是这里会与函数参数冲突
b: number|1
但这样，ts 比它好，let b = 1，并且函数怎么办？
c(): number & a + 1，没有可读性

就算按照原来的走，那么条件/循环逻辑该怎么办？
for循环怎么办？i能不能继承下去？
for(let i=0; i<n; i++) {
  ...
}

for i:0, i<n, i++ ? (
  ...
)

for (i:0, j:n), i<n && j>0, (i++, j++) ? (
  ...
)

匿名表达式该怎么办？
setTimeout(f(): (
  ...
), 1000)

那么这么来说，基本没问题了

createFactory(a: number, b: 0): (
  a += 1
  {a: a, b: b}
)

定义：
a: 1 // 定义一个常量，类型是number<1>，值是1
a: 3|2|1 // 定义一个变量，类型是number<1,2,3>，值是1
a: number|1 // 定义一个变量，类型是number，值是1
b(): a + 1 // 定义一个函数，返回值的类型。。。 
f[]: a + 1
f[x #number, y #number]: x + y
### 设计纲领
* 必须比TS的代码量少，尽量比JS的代码量少
* 原生的类型标注，没有类型标注的代码无法执行
* JS/TS没有实现的特性，JS#也没必要实现，首先保证JS#代码量少的特性
* JS/TS重复实现的特性，JS#不能实现，在JS#中代码尽量不能两写
* 语法不可以与JS/TS的语法相悖，尽量相似/统一
* 将语义层面的规则尽量下放到语法层面

* 新概念要以旧语法为基础，新增一些语法，但不能与旧语法相悖
* 为后续做铺垫

解释：

**什么是将语义层面的规则尽量下放到语法层面**

JS#在语义层面建议了一些标准，并下放到语法层面，这意味着，如果你不按照建议的标准写代码，则写出来的代码在语法层面就会报错，例如，在JavaScript中，可以定义一个类型为any，值为undefined的用var定义的变量：

```
var a;
```

JS#建议每个变量在定义时必须赋予一个初始值，并且只能用let定义，那么在JS#中，定义变量是这样的：

```
a : 0
// 不赋予初始值在语法层面就会报错
a : // 语法报错
a // 这是变量调用，在未定义前调用也会报错
```

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
// 类型定义和值定义的不同顺序有一些区别：
// 类型在值之后，表示类型是对值的断言，例如断言getValue()返回的必然是number类型的：
a : getValue() # number
// 这样可以少写一些类型，比较方便：
x? : y? : z? : 0 # number
// 类型在值之前，表示该变量的类型，例如：
a? # number : 0
// 这样可以更精细地定义每个变量的类型：
a? # number : b? # number | string : 0
```
解释：

**常量/变量声明为什么用冒号**

第一是为了没有let/const但还能与变量赋值相区分，二是与JS的object的属性声明相统一。

~~**为什么用感叹号！定义常量**~~

~~因为在TS中，感叹号！为非空断言符，JS#也准备将感叹号！作为非空断言符，非空断言与常量的稳定性有相似的语义，因此用感叹号！定义常量~~

**普通定义的都是常量**

一方便是为了安全性，另一方面与函数/类的定义相统一，而且常量定义更简单诱导你尽量都用常量。

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
| `arg => retVal`  | `f(arg #Arg) : retVal` |
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
| `if (a) {b} else {c}`  | `a ? b \| c` |
| `a ? b : c`  | `a ? b \| c` |

这里提出了代码块前缀符的概念，因此代码块不是模版代码块
另外switch，while也能解释了，比JS/TS不多不少
另外还能拓展private等

more

```
if exp ? (
  ...
) else if exp ? (
  ...
) else (
  ...
)
```
```
switch var ? (
  case val1 ? (
    ...
  )
  case val2 ? (
    ...
  )
  default (
    ...
  )
)
```

#### While

```
while exp ? (
  ...
)
```

解释：

三元表达式？

鉴于三元表达式的高效性，三元表达式是一定要有的，但与JS有些许差别：

```
a ? b | c
```

if/while/switch的问号实际上与三元表达式统一

### ForEach

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

#### Type
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `type T = M`  | `T #: M` |
| `type M = (<T>(a: T) => T)\|string`  | `M #: (<T>(a #T) : T) \| string` |
| `const arr: Array<number> = new Array<number>([])`  | `arr : Array<number>([]) #Array<number>` |
| `type T = {a: number, [k: string]: boolean}`  | `T #: {a #number, [k #string] #string}` |

more

`M<T>(a: T) #: T`