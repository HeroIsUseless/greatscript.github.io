# 自制编程语言JS#终于设计完毕，大家提提意见
### 介绍
JS#可以看作又一个TypeScript，但是比TS更简约，解决的是TS过于繁琐，代码冗长的问题。
以JS为基础，修改了不少JS语法，简约统一，有类型标注能力。

### 与JS/TS的对比

#### 注释
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `// Line comment`  | Same |
| `/* Comment */`  | Same |
| `/** Doc Comment */`  | Same |

#### 变量
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `const x = 5;`  | `x : 5` |
| `var x = y;`  | `x? : y` |
| `let x = 5; x = x + 1;`  | `x? : 5, x = x + 1` |

|  TYPESCRIPT   | JS#  |
|  ----  | ----  |
| `const x: number = 5;`  | `x #number : 5` |
| `var x = y as number;`  | `x? : y #number` |

#### 字符串
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `"Hello world!"`  | `'Hello world!'` |
| `'Hello world!'`  | Same |
| `"hello " + "world"`  | `'hello ' + 'world'` |
| ``` `hello ${message}` ```  | ``` 'hello `message`'``` |

#### 布尔值
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `true`, `false`  | Same |
| `!true`  | Same |

#### 对象
|  JAVASCRIPT   | JS#  |
|  ----  | ----  
| `{x: 30, y: 20}`  | Same |
| `point.x`  | Same |
| `point.y = 30;`  | Same |
| `{...point, x: 30}`  | Same |

|  TYPESCRIPT   | JS#  |
|  ----  | ----  |
| `class point {x: number = 30, y: number = 20}`  | `point() : {x #number : 30, y? #number: 20}` |
| `const point = {x: 30 as number, y: 20 as number}`  | `point : {x: 30 #number, y?: 20 #number}` |

#### 函数
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `arg => retVal`  | `f(arg #Arg) : retVal` |
| `function named(arg) {...}`  | `named(arg #Arg) : (...)` |
| `const f = function(arg) {...}`  | `f(arg #Arg) : (...)` |
| `add(4, add(5, 6))`  | Same |

#### 函数实例
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

#### 条件语句
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `if(a) {b} else {c}`  | `if a ? (b) else (c)` |
| `switch(a) {case b: break}`  | `switch a ? (case b ? break)` |
| `a ? b : c`  | `a ? b \| c` |

#### 循环语句

|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `while(a) {b}`  | `while a ? (b)` |
| `for(let i=0, j=n; i<n && j>0; i++, j--) {b}`  | `for (i?:0, j?:n), i<n && j>0, (i+=1, j-=1)? (b)` |

#### 解构
|  JAVASCRIPT   | JS#  |
|  ----  | ----  |
| `const {a, b} = data`  | `{a, b} : data` |
| `const [a, b] = data`  | `[a, b] : data` |
| `const {a: aa, b: bb} = data`  | `{aa : a, bb : b} : data` |

#### React实例
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

#### 类型
|  TYPESCRIPT   | JS#  |
|  ----  | ----  |
| `type T = M`  | `T #: M` |
| `type M = (<T>(a: T) => T)\|string`  | `M #: (<T>(a #T) : T) \| string` |
| `const arr: Array<number> = new Array<number>([])`  | `arr : Array<number>([]) #Array<number>` |
| `type T = {a: number, [k: string]: boolean}`  | `T #: {a #number, [k #string] #string}` |